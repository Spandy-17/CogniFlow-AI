import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthShell, Field, FormMessage, GoogleButton, PrimaryButton } from "@/components/AuthShell";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
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
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (session) navigate({ to: "/dashboard", replace: true });
  }, [session, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!agreed) {
      setError("Please accept the Terms of Service to continue.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`.trim(),
        },
      },
    });
    setLoading(false);
    if (error) {
      setError(
        error.message.toLowerCase().includes("already")
          ? "An account with this email already exists — try signing in instead."
          : error.message,
      );
      return;
    }
    if (data.session) {
      navigate({ to: "/dashboard", replace: true });
      return;
    }
    setSuccess("Account created. Check your email to confirm, then sign in.");
  };

  const onGoogle = async () => {
    setError(null);
    setGoogleLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setGoogleLoading(false);
      setError(result.error.message ?? "Google sign-up failed. Please try again.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/dashboard", replace: true });
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Deploy your first agent pipeline in under 60 seconds."
      footer={<>Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link></>}
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        <FormMessage error={error} success={success} />
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
