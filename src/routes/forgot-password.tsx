import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, FormMessage, PrimaryButton } from "@/components/AuthShell";
import { Mail, MailCheck } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [
    { title: "Reset password · CogniFlow" },
    { name: "description", content: "Send a recovery link to your inbox." },
    { property: "og:title", content: "Reset password · CogniFlow" },
    { property: "og:description", content: "Send a recovery link to your inbox." },
  ]}),
  component: ForgotPage,
});

function ForgotPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Supabase sends a password reset email — link redirects to /reset-password
    const { error: supError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (supError) {
      setError(supError.message);
      return;
    }

    setSent(true);
  };

  if (sent) {
    return (
      <AuthShell
        title="Reset link sent!"
        subtitle={`Check your inbox at ${email} for a password reset link.`}
        footer={<><Link to="/login" className="font-semibold text-primary hover:underline">← Back to sign in</Link></>}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="grid size-16 place-items-center rounded-2xl bg-primary/10">
            <MailCheck className="size-8 text-primary" />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            The link expires in 1 hour. If you don't see the email, check your spam folder.
          </p>
          <button
            onClick={() => setSent(false)}
            className="text-sm font-semibold text-primary hover:underline"
          >
            Resend link
          </button>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Forgot password?"
      subtitle="Enter your email and we'll send you a secure link to reset it."
      footer={<><Link to="/login" className="font-semibold text-primary hover:underline">← Back to sign in</Link></>}
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        <FormMessage error={error} />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={setEmail}
          required
          autoComplete="email"
        />
        <PrimaryButton type="submit" loading={loading}>
          <Mail className="size-4" /> Send reset link
        </PrimaryButton>
      </form>
    </AuthShell>
  );
}