import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthShell, Field, FormMessage, GoogleButton, PrimaryButton } from "@/components/AuthShell";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/login")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Sign in · CogniFlow" },
    { name: "description", content: "Sign in to your CogniFlow workspace." },
    { property: "og:title", content: "Sign in · CogniFlow" },
    { property: "og:description", content: "Sign in to your CogniFlow workspace." },
  ]}),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { session } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (session) navigate({ to: "/dashboard", replace: true });
  }, [session, navigate]);

  // Capture any OAuth error returned in the URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.startsWith("#") ? window.location.hash.substring(1) : "";
      const hashParams = new URLSearchParams(hash);
      const searchParams = new URLSearchParams(window.location.search);
      const err = hashParams.get("error_description") || searchParams.get("error_description");
      if (err) {
        setError(decodeURIComponent(err.replace(/\+/g, " ")));
      }
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: supError } = await supabase.auth.signInWithPassword({ email, password });

    if (supError) {
      // Show the real error — wrong password, email not confirmed, etc.
      if (supError.message.includes("Email not confirmed")) {
        setError("Please verify your email before signing in. Check your inbox for a confirmation link.");
      } else if (supError.message.includes("Invalid login credentials")) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError(supError.message);
      }
      setLoading(false);
      return;
    }

    // Supabase session is set automatically via onAuthStateChange in useAuth
    setLoading(false);
    navigate({ to: "/dashboard", replace: true });
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

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your CogniFlow workspace to keep the agents running."
      footer={<>Don't have an account? <Link to="/signup" className="font-semibold text-primary hover:underline">Create one</Link></>}
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        <FormMessage error={error} />
        <Field id="email" label="Email" type="email" placeholder="you@company.com" value={email} onChange={setEmail} required autoComplete="email" />
        <Field id="password" label="Password" type="password" placeholder="••••••••" value={password} onChange={setPassword} required autoComplete="current-password" />
        <div className="flex items-center justify-end text-xs">
          <Link to="/forgot-password" className="font-medium text-primary hover:underline">Forgot password?</Link>
        </div>
        <PrimaryButton type="submit" loading={loading}>Sign in <ArrowRight className="size-4" /></PrimaryButton>
        <div className="relative py-1 text-center text-xs text-muted-foreground">
          <span className="relative z-10 px-2">or</span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
        </div>
        <GoogleButton onClick={onGoogle} loading={googleLoading} />
      </form>
    </AuthShell>
  );
}

