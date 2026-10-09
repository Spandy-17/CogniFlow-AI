import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

const DEMO_SESSION_KEY = "cogniflow_demo_session";

type AuthState = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInAsDemo: (email?: string, name?: string) => void;
};

export const createDemoSession = (email = "demo@cogniflow.ai", name = "Demo User"): Session => {
  const parts = name.trim().split(" ");
  const firstName = parts[0] || "Demo";
  const lastName = parts.slice(1).join(" ") || "";
  const user: User = {
    id: "demo-user-id",
    app_metadata: { provider: "email" },
    user_metadata: {
      full_name: name,
      first_name: firstName,
      last_name: lastName,
    },
    aud: "authenticated",
    created_at: new Date().toISOString(),
    email,
    role: "authenticated",
    updated_at: new Date().toISOString(),
  };
  return {
    access_token: "demo-access-token",
    token_type: "bearer",
    expires_in: 3600,
    refresh_token: "demo-refresh-token",
    user,
  };
};

const AuthContext = createContext<AuthState>({
  session: null,
  user: null,
  loading: true,
  signOut: async () => {},
  signInAsDemo: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedDemo = localStorage.getItem(DEMO_SESSION_KEY);
    if (savedDemo) {
      try {
        setSession(JSON.parse(savedDemo));
        setLoading(false);
        return;
      } catch (e) {
        localStorage.removeItem(DEMO_SESSION_KEY);
      }
    }

    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      if (!localStorage.getItem(DEMO_SESSION_KEY)) {
        setSession(next);
        setLoading(false);
      }
    });

    supabase.auth.getSession().then(({ data }) => {
      if (!localStorage.getItem(DEMO_SESSION_KEY)) {
        setSession(data.session);
        setLoading(false);
      }
    }).catch(() => {
      setLoading(false);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const signInAsDemo = (email = "demo@cogniflow.ai", name = "Demo User") => {
    const demo = createDemoSession(email, name);
    localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(demo));
    setSession(demo);
  };

  const value = useMemo<AuthState>(
    () => ({
      session,
      user: session?.user ?? null,
      loading,
      signOut: async () => {
        localStorage.removeItem(DEMO_SESSION_KEY);
        setSession(null);
        try {
          await supabase.auth.signOut();
        } catch (e) {
          // ignore errors when backend is offline
        }
      },
      signInAsDemo,
    }),
    [session, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export function displayName(user: User | null) {
  if (!user) return "Guest";
  const meta = user.user_metadata as Record<string, string | undefined>;
  return (
    meta?.full_name ||
    [meta?.first_name, meta?.last_name].filter(Boolean).join(" ") ||
    user.email?.split("@")[0] ||
    "Member"
  );
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}
