import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthShell, Field, FormMessage, GoogleButton, PrimaryButton } from "@/components/AuthShell";
import { ArrowRight, MailCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/signup")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Create account · CogniFlow" },
    { name: "description", content: "Start your CogniFlow workspace in seconds." },
    { property: "og:title", content: "Create account · CogniFlow" },
    { property: "og:description", content: "Start your CogniFlow workspace in seconds." },
  ]}),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const { session } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // When Supabase requires email confirmation, we show a success state instead of logging in
  const [emailSent, setEmailSent] = useState(false);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (session) navigate({ to: "/dashboard", replace: true });
  }, [session, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!agreed) {
      setError("Please accept the Terms of Service to continue.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    const fullName = `${firstName} ${lastName}`.trim() || "Workspace Admin";

    const { data, error: supError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: fullName,
        },
      },
    });

    setLoading(false);

    if (supError) {
      // Handle known errors with friendly messages
      if (supError.message.includes("already registered") || supError.message.includes("already exists")) {
        setError("An account with this email already exists. Try signing in instead.");
      } else {
        setError(supError.message);
      }
      return;
    }

    if (data.session) {
      // Email confirmation is disabled in Supabase — user is immediately logged in
      navigate({ to: "/dashboard", replace: true });
      return;
    }

    // Email confirmation is required (Supabase default) — tell the user to check inbox
    setEmailSent(true);
  };

  const onGoogle = async () => {
    setError(null);
    setGoogleLoading(true);
    try {
      const { error: supError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (supError) {
        setError(supError.message || "Google sign-in failed. Please try again.");
        setGoogleLoading(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  // Show success state when email confirmation is sent
  if (emailSent) {
    return (
      <AuthShell
        title="Check your inbox"
        subtitle={`We sent a confirmation link to ${email}. Click it to activate your account.`}
        footer={<>Wrong email? <button onClick={() => setEmailSent(false)} className="font-semibold text-primary hover:underline">Go back</button></>}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="grid size-16 place-items-center rounded-2xl bg-primary/10">
            <MailCheck className="size-8 text-primary" />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            After confirming your email, you'll be redirected to your dashboard automatically.
          </p>
          <Link to="/login" className="text-sm font-semibold text-primary hover:underline">
            Already confirmed? Sign in →
          </Link>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Deploy your first agent pipeline in under 60 seconds."
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link></>}
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        <FormMessage error={error} />
        <div className="grid grid-cols-2 gap-3">
          <Field id="first_name" label="First name" placeholder="Ada" value={firstName} onChange={setFirstName} required />
          <Field id="last_name" label="Last name" placeholder="Lovelace" value={lastName} onChange={setLastName} required />
        </div>
        <Field id="email" label="Work email" type="email" placeholder="you@company.com" value={email} onChange={setEmail} required autoComplete="email" />
        <Field id="password" label="Password" type="password" placeholder="At least 8 characters" value={password} onChange={setPassword} required autoComplete="new-password" />
        <label className="flex gap-2 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 size-3.5 rounded border-border accent-[oklch(0.55_0.22_275)]"
          />
          I agree to the Terms of Service and Privacy Policy.
        </label>
        <PrimaryButton type="submit" loading={loading}>Create account <ArrowRight className="size-4" /></PrimaryButton>
        <div className="relative py-1 text-center text-xs text-muted-foreground">
          <span className="relative z-10 px-2">or</span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
        </div>
        <GoogleButton onClick={onGoogle} loading={googleLoading} />
      </form>
    </AuthShell>
  );
}
