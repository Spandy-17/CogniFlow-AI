import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Card, PageHeader } from "@/components/DashboardShell";
import {
  Mail,
  MapPin,
  Calendar,
  FileText,
  CheckCircle2,
  Sparkles,
  Pencil,
  Camera,
  X,
  Check,
  User,
  Briefcase,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth, displayName } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/dashboard/profile")({ component: ProfilePage });

export interface UserProfile {
  fullName: string;
  role: string;
  email: string;
  location: string;
  joined: string;
  bio: string;
  avatarUrl?: string;
}

const PROFILE_STORAGE_KEY = "cogniflow_user_profile";

const DEFAULT_PROFILE: UserProfile = {
  fullName: "Ada Lovelace",
  role: "Workspace Admin",
  email: "ada@cogniflow.ai",
  location: "London, UK",
  joined: "Joined Jan 2026",
  bio: "Lead AI System Architect overseeing multi-agent document intelligence and auto-routing pipelines.",
};

const stats = [
  { label: "Documents uploaded", value: "1,284" },
  { label: "Approved", value: "1,196" },
  { label: "Avg. confidence", value: "97.4%" },
  { label: "Automation saved", value: "312h" },
];

const activity = [
  { Icon: CheckCircle2, cls: "text-success bg-success/15", t: "Approved 24 documents", when: "2h ago" },
  { Icon: FileText, cls: "text-primary bg-primary/10", t: "Uploaded Certificate_Ada.pdf", when: "yesterday" },
  { Icon: Sparkles, cls: "text-brand-2 bg-brand-2/10", t: "Enabled auto-routing", when: "2d ago" },
];

function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<UserProfile>(DEFAULT_PROFILE);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as UserProfile;
        setProfile(parsed);
        setDraft(parsed);
      } else if (user) {
        const initialProfile: UserProfile = {
          ...DEFAULT_PROFILE,
          fullName: displayName(user) !== "Guest" ? displayName(user) : DEFAULT_PROFILE.fullName,
          email: user.email || DEFAULT_PROFILE.email,
        };
        setProfile(initialProfile);
        setDraft(initialProfile);
      }
    } catch {
      // ignore parsing error
    }
  }, [user]);

  const handleStartEditing = () => {
    setDraft({ ...profile });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraft({ ...profile });
    setIsEditing(false);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image file size must be less than 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setDraft((prev) => ({ ...prev, avatarUrl: reader.result as string }));
      toast.info("Avatar preview updated. Click 'Save changes' to apply.");
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    setDraft((prev) => ({ ...prev, avatarUrl: undefined }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.fullName.trim()) {
      toast.error("Please provide a valid full name.");
      return;
    }

    setSaving(true);
    try {
      const updated: UserProfile = {
        ...draft,
        fullName: draft.fullName.trim(),
        role: draft.role.trim() || "Team Member",
        email: draft.email.trim() || DEFAULT_PROFILE.email,
        location: draft.location.trim() || "Remote",
        bio: draft.bio.trim(),
      };

      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updated));
      setProfile(updated);

      // If user is authenticated in Supabase, update user metadata
      if (user) {
        await supabase.auth.updateUser({
          data: {
            full_name: updated.fullName,
          },
        });
      }

      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save profile changes.");
    } finally {
      setSaving(false);
    }
  };

  const displayInitial = (profile.fullName.trim()[0] || "A").toUpperCase();

  return (
    <>
      <PageHeader title="Profile" subtitle="Your identity and recent activity across CogniFlow." />
      <div className="grid gap-4 lg:grid-cols-[1.15fr_1.6fr]">
        <Card className="h-fit">
          {!isEditing ? (
            /* View Mode */
            <div className="flex flex-col items-center text-center">
              <div className="relative group">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.fullName}
                    className="size-24 rounded-3xl object-cover border-2 border-primary/20 shadow-glow"
                  />
                ) : (
                  <div className="grid size-24 place-items-center rounded-3xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-3xl font-bold shadow-glow">
                    {displayInitial}
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleStartEditing}
                  title="Change avatar"
                  className="absolute -bottom-1 -right-1 grid size-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-110"
                >
                  <Pencil className="size-3.5" />
                </button>
              </div>

              <p className="mt-4 text-xl font-bold">{profile.fullName}</p>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {profile.role}
                </span>
              </div>

              {profile.bio && (
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed px-2 text-center max-w-sm">
                  {profile.bio}
                </p>
              )}

              <div className="mt-5 grid w-full grid-cols-1 gap-2 text-left text-sm">
                <Row Icon={Mail} label="Email" v={profile.email} />
                <Row Icon={MapPin} label="Location" v={profile.location} />
                <Row Icon={Calendar} label="Joined" v={profile.joined} />
              </div>

              <button
                type="button"
                onClick={handleStartEditing}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
              >
                <Pencil className="size-4" />
                Edit profile
              </button>
            </div>
          ) : (
            /* Edit Mode */
            <form onSubmit={handleSave} className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <Pencil className="size-4 text-primary" />
                  <p className="text-sm font-semibold">Edit Profile</p>
                </div>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-lg p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Avatar Uploader */}
              <div className="flex items-center gap-4 py-1">
                <div className="relative">
                  {draft.avatarUrl ? (
                    <img
                      src={draft.avatarUrl}
                      alt="Avatar preview"
                      className="size-16 rounded-2xl object-cover border border-primary/30"
                    />
                  ) : (
                    <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white text-xl font-bold">
                      {(draft.fullName.trim()[0] || "A").toUpperCase()}
                    </div>
                  )}
                </div>
                <div className="space-y-1.5">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                    id="profile-avatar-upload"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-secondary"
                    >
                      <Camera className="size-3.5" />
                      Upload photo
                    </button>
                    {draft.avatarUrl && (
                      <button
                        type="button"
                        onClick={handleRemoveAvatar}
                        className="rounded-xl border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground">PNG, JPG or WebP up to 2MB</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3 text-left">
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">Full Name *</label>
                  <div className="relative flex items-center">
                    <User className="absolute left-3 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={draft.fullName}
                      onChange={(e) => setDraft((p) => ({ ...p, fullName: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                      placeholder="e.g. Ada Lovelace"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">Role / Title</label>
                  <div className="relative flex items-center">
                    <Briefcase className="absolute left-3 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={draft.role}
                      onChange={(e) => setDraft((p) => ({ ...p, role: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                      placeholder="e.g. Workspace Admin"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">Email</label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3 size-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={draft.email}
                      onChange={(e) => setDraft((p) => ({ ...p, email: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                      placeholder="e.g. name@cogniflow.ai"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">Location</label>
                  <div className="relative flex items-center">
                    <MapPin className="absolute left-3 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      value={draft.location}
                      onChange={(e) => setDraft((p) => ({ ...p, location: e.target.value }))}
                      className="w-full rounded-xl border border-border bg-background/60 pl-9 pr-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                      placeholder="e.g. London, UK"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">About / Bio</label>
                  <textarea
                    rows={3}
                    value={draft.bio}
                    onChange={(e) => setDraft((p) => ({ ...p, bio: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/15 resize-none"
                    placeholder="Brief description about yourself..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-secondary transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || !draft.fullName.trim()}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:opacity-50"
                >
                  <Check className="size-4" />
                  {saving ? "Saving..." : "Save changes"}
                </button>
              </div>
            </form>
          )}
        </Card>

        {/* Stats & Recent Activity */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <Card key={s.label}>
                <p className="text-2xl font-bold tabular-nums">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </Card>
            ))}
          </div>
          <Card className="!p-0 overflow-hidden">
            <div className="border-b border-border/60 px-4 py-3">
              <p className="text-sm font-semibold">Recent activity</p>
            </div>
            <ul className="divide-y divide-border/50">
              {activity.map((a, i) => {
                const Icon = a.Icon;
                return (
                  <li key={i} className="flex items-center gap-3 px-4 py-3">
                    <div className={`grid size-9 place-items-center rounded-xl ${a.cls}`}>
                      <Icon className="size-4.5" />
                    </div>
                    <p className="flex-1 text-sm font-medium">{a.t}</p>
                    <span className="text-xs text-muted-foreground">{a.when}</span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

function Row({ Icon, label, v }: { Icon: typeof Mail; label: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-2.5 rounded-xl bg-secondary/60 px-3 py-2">
      <div className="flex items-center gap-2.5 text-muted-foreground">
        <Icon className="size-4" />
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-sm font-medium text-foreground truncate">{v}</span>
    </div>
  );
}