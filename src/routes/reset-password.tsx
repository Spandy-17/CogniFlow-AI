import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell, Field, FormMessage, PrimaryButton } from "@/components/AuthShell";
import { KeyRound } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Set new password · CogniFlow" },
    { name: "description", content: "Choose a new password for your workspace." },
    { property: "og:title", content: "Set new password · CogniFlow" },
    { property: "og:description", content: "Choose a new password for your workspace." },
  ]}),
  component: ResetPage,
});

function ResetPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    // Supabase reads the reset token from the URL automatically when this page loads.
    // updateUser() commits the new password to the user's account.
    const { error: supError } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (supError) {
      if (supError.message.includes("expired") || supError.message.includes("invalid")) {
        setError("Your reset link has expired or is invalid. Please request a new one.");
      } else {
        setError(supError.message);
      }
      return;
    }

    // Password updated — redirect to dashboard (user is now logged in)
    navigate({ to: "/dashboard", replace: true });
  };

  return (
    <AuthShell
      title="Set a new password"
      subtitle="Use at least 8 characters — mix letters, numbers and symbols."
      footer={<><Link to="/login" className="font-semibold text-primary hover:underline">Back to sign in</Link></>}
    >
      <form className="space-y-4" onSubmit={onSubmit}>
        <FormMessage error={error} />
        <Field
          id="pw"
          label="New password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
          required
          autoComplete="new-password"
        />
        <Field
          id="pw2"
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={confirm}
          onChange={setConfirm}
          required
          autoComplete="new-password"
        />
        <PrimaryButton type="submit" loading={loading}>
          <KeyRound className="size-4" /> Update password
        </PrimaryButton>
      </form>
    </AuthShell>
  );
}