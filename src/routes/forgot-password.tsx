import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, PrimaryButton } from "@/components/AuthShell";
import { Mail } from "lucide-react";

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
  return (
    <AuthShell
      title="Forgot password?"
      subtitle="Enter your email and we'll send you a secure link to reset it."
      footer={<><Link to="/login" className="font-semibold text-primary hover:underline">← Back to sign in</Link></>}
    >
      <form className="space-y-4">
        <Field id="email" label="Email" type="email" placeholder="you@company.com" />
        <PrimaryButton type="submit"><Mail className="size-4" /> Send reset link</PrimaryButton>
      </form>
    </AuthShell>
  );
}