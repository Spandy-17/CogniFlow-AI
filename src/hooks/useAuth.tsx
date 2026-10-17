import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AuthState = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState>({
  session: null,
  user: null,
  loading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if OAuth callback params exist in URL (only for success codes/tokens)
    const hasOAuthParams =
      typeof window !== "undefined" &&
      !window.location.search.includes("error=") &&
      !window.location.hash.includes("error=") &&
      (window.location.search.includes("code=") ||
        window.location.hash.includes("access_token="));

    // Listen to auth state changes from Supabase (login, logout, token refresh)
    const { data: sub } = supabase.auth.onAuthStateChange((event, next) => {
      setSession(next);
      // Don't turn off loading on INITIAL_SESSION if an OAuth code exchange is in flight
      if (event === "INITIAL_SESSION" && !next && hasOAuthParams) {
        return;
      }
      setLoading(false);
    });

    // Restore existing session on page load
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (data?.session) {
          setSession(data.session);
          setLoading(false);
        } else if (!hasOAuthParams) {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });

    // Safety timeout in case OAuth code is invalid or Supabase doesn't respond
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (hasOAuthParams) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 4000);
    }

    return () => {
      sub.subscription.unsubscribe();
      if (timer) clearTimeout(timer);
    };
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      session,
      user: session?.user ?? null,
      loading,
      signOut: async () => {
        await supabase.auth.signOut();
        setSession(null);
      },
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
