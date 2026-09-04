import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Send, X, Bot, User as UserIcon } from "lucide-react";
import { assistantReply } from "@/lib/demo-data";

type Msg = { role: "user" | "assistant"; text: string };

const suggestions = [
    "Where is Certificate_Ada.pdf?",
    "Why was this rejected?",
    "What is the confidence score?",
    "Which folders were assigned?",
];

function Markdownish({ text }: { text: string }) {
    return (
        <div className="space-y-1 text-sm leading-relaxed">
            {text.split("\n").map((line, i) => {
                if (!line.trim()) return <div key={i} className="h-1" />;
                const html = line
                    .replace(/^- /, "• ")
                    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.+?)\*/g, "<em>$1</em>")
                    .replace(/`(.+?)`/g, '<code class="rounded bg-secondary px-1 py-0.5 text-[11px]">$1</code>');
                return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
            })}
        </div>
    );
}

export function AiAssistant() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [thinking, setThinking] = useState(false);
    const [msgs, setMsgs] = useState<Msg[]>([
        {
            role: "assistant",
            text: "Hi — I'm CogniAI. Ask me about any document in your workspace: where it was routed, its confidence score, or why validation failed.",
        },
    ]);
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgs, open, thinking]);

    const send = (text: string) => {
        const q = text.trim();
        if (!q || thinking) return;
        setMsgs((m) => [...m, { role: "user", text: q }]);
        setInput("");
        setThinking(true);
        setTimeout(() => {
            setMsgs((m) => [...m, { role: "assistant", text: assistantReply(q) }]);
            setThinking(false);
        }, 650);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-24 right-4 z-50 flex h-[min(560px,72vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl glass-strong shadow-xl"
                        role="dialog"
                        aria-label="CogniAI assistant"
                    >
                        <header className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
                            <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white">
                                <Bot className="size-4.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold leading-tight">CogniAI Assistant</p>
                                <p className="text-[11px] text-muted-foreground">Grounded in your document pipeline</p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Close assistant"
                                className="grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
                            >
                                <X className="size-4" />
                            </button>
                        </header>

                        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
                            {msgs.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : ""}`}
                                >
                                    {m.role === "assistant" && (
                                        <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                                            <Bot className="size-3.5" />
                                        </div>
                                    )}
                                    <div
                                        className={
                                            m.role === "user"
                                                ? "max-w-[80%] rounded-2xl bg-primary px-3.5 py-2 text-sm text-primary-foreground"
                                                : "max-w-[85%] text-foreground"
                                        }
                                    >
                                        {m.role === "user" ? m.text : <Markdownish text={m.text} />}
                                    </div>
                                    {m.role === "user" && (
                                        <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground">
                                            <UserIcon className="size-3.5" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            {thinking && (
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="grid size-7 place-items-center rounded-lg bg-primary/10 text-primary">
                                        <Bot className="size-3.5" />
                                    </div>
                                    <span className="animate-pulse">Thinking…</span>
                                </div>
                            )}
                            <div ref={endRef} />
                        </div>

                        {msgs.length <= 1 && (
                            <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                                {suggestions.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => send(s)}
                                        className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                send(input);
                            }}
                            className="flex items-center gap-2 border-t border-border/60 p-3"
                        >
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about a document…"
                                aria-label="Message CogniAI"
                                className="min-w-0 flex-1 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/15"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || thinking}
                                aria-label="Send message"
                                className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white transition hover:brightness-110 disabled:opacity-50"
                            >
                                <Send className="size-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
                {open ? <X className="size-4" /> : <MessageCircle className="size-4" />}
                {open ? "Close" : "Ask CogniAI"}
            </button>
        </>
    );
}
