import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, PrimaryButton } from "@/components/AuthShell";
import { useState } from "react";

export const Route = createFileRoute("/verify-otp")({
  head: () => ({ meta: [
    { title: "Verify code · CogniFlow" },
    { name: "description", content: "Enter your 6-digit verification code." },
    { property: "og:title", content: "Verify code · CogniFlow" },
    { property: "og:description", content: "Enter your 6-digit verification code." },
  ]}),
  component: OtpPage,
});

function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  return (
    <AuthShell
      title="Verify your email"
      subtitle="We sent a 6-digit code to your inbox. It expires in 10 minutes."
      footer={<><Link to="/login" className="font-semibold text-primary hover:underline">Back to sign in</Link></>}
    >
      <form className="space-y-5">
        <div className="flex justify-between gap-2">
          {otp.map((v, i) => (
            <input
              key={i}
              value={v}
              onChange={(e) => {
                const c = e.target.value.slice(-1);
                const next = [...otp]; next[i] = c; setOtp(next);
                if (c && i < 5) (document.getElementById(`otp-${i+1}`) as HTMLInputElement | null)?.focus();
              }}
              id={`otp-${i}`}
              maxLength={1}
              inputMode="numeric"
              className="size-12 rounded-xl border border-border bg-background/70 text-center text-lg font-bold shadow-soft outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
            />
          ))}
        </div>
        <PrimaryButton type="submit">Verify</PrimaryButton>
        <p className="text-center text-xs text-muted-foreground">
          Didn't receive it? <button type="button" className="font-semibold text-primary hover:underline">Resend code</button>
        </p>
      </form>
    </AuthShell>
  );
}