import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Field, PrimaryButton } from "@/components/AuthShell";

export const Route = createFileRoute("/reset-password")({
  head: () => ({ meta: [
    { title: "Set new password · CogniFlow" },
    { name: "description", content: "Choose a new password for your workspace." },
    { property: "og:title", content: "Set new password · CogniFlow" },
    { property: "og:description", content: "Choose a new password for your workspace." },
  ]}),
  component: ResetPage,
});

function ResetPage() {
  return (
    <AuthShell
      title="Set a new password"
      subtitle="Use at least 8 characters — mix letters, numbers and symbols."
      footer={<><Link to="/login" className="font-semibold text-primary hover:underline">Back to sign in</Link></>}
    >
      <form className="space-y-4">
        <Field id="pw" label="New password" type="password" placeholder="••••••••" />
        <Field id="pw2" label="Confirm password" type="password" placeholder="••••••••" />
        <PrimaryButton type="submit">Update password</PrimaryButton>
      </form>
    </AuthShell>
  );
}