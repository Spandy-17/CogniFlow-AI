export type AiProviderId = "openai" | "gemini" | "anthropic";

export interface ProviderInfo {
  id: AiProviderId;
  name: string;
  badge: string;
  description: string;
  placeholder: string;
  getKeyUrl: string;
  keyPrefixHint: string;
}

export const AI_PROVIDERS: Record<AiProviderId, ProviderInfo> = {
  openai: {
    id: "openai",
    name: "OpenAI",
    badge: "GPT-4o & o-Series",
    description: "Reasoning and multi-agent document analysis with GPT-4o and o1.",
    placeholder: "sk-proj-...",
    getKeyUrl: "https://platform.openai.com/api-keys",
    keyPrefixHint: "Starts with 'sk-' or 'sk-proj-'",
  },
  gemini: {
    id: "gemini",
    name: "Google Gemini",
    badge: "Gemini 1.5 & 2.0",
    description: "Multimodal document comprehension and fast token processing.",
    placeholder: "AIzaSy...",
    getKeyUrl: "https://aistudio.google.com/app/apikey",
    keyPrefixHint: "Starts with 'AIzaSy...'",
  },
  anthropic: {
    id: "anthropic",
    name: "Anthropic Claude",
    badge: "Claude 3.5 Sonnet",
    description: "High-accuracy structured extraction and rigorous audit reviews.",
    placeholder: "sk-ant-api03-...",
    getKeyUrl: "https://console.anthropic.com/settings/keys",
    keyPrefixHint: "Starts with 'sk-ant-'",
  },
};

export interface StoredApiKey {
  id: string;
  provider: AiProviderId;
  key: string;
  label?: string;
  createdAt: string;
  isActive?: boolean;
}

const STORAGE_KEY = "cogniflow_user_api_keys";

export function getStoredApiKeys(): StoredApiKey[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as StoredApiKey[];
  } catch (err) {
    console.error("Failed to read API keys from localStorage", err);
    return [];
  }
}

export function saveApiKey(provider: AiProviderId, key: string, label?: string): StoredApiKey {
  const existing = getStoredApiKeys();
  const trimmedKey = key.trim();

  // If a key already exists for this provider, update it or append
  const newEntry: StoredApiKey = {
    id: `key_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    provider,
    key: trimmedKey,
    label: label?.trim() || `${AI_PROVIDERS[provider].name} Key`,
    createdAt: new Date().toISOString(),
    isActive: true,
  };

  // Set other keys of the same provider to inactive, or replace
  const filtered = existing.filter((k) => k.provider !== provider);
  const updated = [newEntry, ...filtered];

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to save API key to localStorage", err);
  }

  return newEntry;
}

export function deleteApiKey(id: string): void {
  const existing = getStoredApiKeys();
  const updated = existing.filter((k) => k.id !== id);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to delete API key from localStorage", err);
  }
}

export function maskApiKey(key: string): string {
  if (!key) return "";
  if (key.length <= 8) return "••••••••";
  const start = key.slice(0, Math.min(7, Math.floor(key.length / 3)));
  const end = key.slice(-4);
  return `${start}••••••••••••${end}`;
}
