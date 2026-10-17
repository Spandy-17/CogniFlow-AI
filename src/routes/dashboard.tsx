import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { DashboardShell } from "@/components/DashboardShell";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/dashboard")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Dashboard · CogniFlow" },
    { name: "description", content: "Your AI document intelligence workspace." },
    { property: "og:title", content: "Dashboard · CogniFlow" },
    { property: "og:description", content: "Your AI document intelligence workspace." },
  ]}),
  component: ProtectedDashboard,
});

function ProtectedDashboard() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If OAuth failed with an error, forward to /login with the error details
    if (window.location.search.includes("error=") || window.location.hash.includes("error=")) {
      const err = window.location.search || window.location.hash;
      window.location.href = `/login${err}`;
      return;
    }

    const hasOAuthParams =
      window.location.search.includes("code=") ||
      window.location.hash.includes("access_token=");

    if (!loading && !session && !hasOAuthParams) {
      navigate({ to: "/login", replace: true });
    }
  }, [loading, session, navigate]);

  if (loading || !session) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" /> Preparing your workspace…
        </div>
      </div>
    );
  }

  return <DashboardShell />;
}
