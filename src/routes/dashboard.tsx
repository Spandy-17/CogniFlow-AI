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
    if (!loading && !session) navigate({ to: "/login", replace: true });
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
