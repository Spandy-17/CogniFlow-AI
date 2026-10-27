export type DocStatus = "uploaded" | "routed" | "review" | "processing" | "rejected" | "error";

export const statusMeta: Record<DocStatus, { label: string; cls: string }> = {
  uploaded: { label: "Uploaded", cls: "bg-secondary text-muted-foreground" },
  routed: { label: "Routed", cls: "bg-success/15 text-success" },
  review: { label: "Needs review", cls: "bg-warning/15 text-warning" },
  processing: { label: "Processing", cls: "bg-primary/10 text-primary" },
  rejected: { label: "Rejected", cls: "bg-destructive/10 text-destructive" },
  error: { label: "Processing failed", cls: "bg-destructive/10 text-destructive" },
};

/** Rule-based assistant grounded in the user's actual uploaded documents. */
export function assistantReply(question: string, docs: { id: string; name: string; cat: string; conf: number; status: DocStatus; folder: string; date: string; validation: { rule: string; passed: boolean }[]; timeline: { agent: string; detail: string; at: string; state: "done" | "active" | "failed" }[] }[] = []): string {
  if (!docs || docs.length === 0) {
    return "You have not uploaded any documents yet. Once you upload files, I can tell you which folders they were routed to, their AI confidence scores, validation checks, and agent processing timelines.";
  }

  const q = question.toLowerCase();
  const matched = docs.find((d) =>
    q.includes(d.name.toLowerCase().split(".")[0]!.toLowerCase()) ||
    d.name.toLowerCase().includes(q)
  );

  if (q.includes("where") || q.includes("located") || q.includes("routed to") || q.includes("folder")) {
    if (matched) {
      return matched.folder === "—" || !matched.folder
        ? `**${matched.name}** has not been routed yet — it is currently *${statusMeta[matched.status]?.label?.toLowerCase() || matched.status}*. The Routing Agent will assign a destination folder once validation passes.`
        : `**${matched.name}** was routed to \`${matched.folder}\` by the Routing Agent (${matched.date}).`;
    }
    const routedList = docs.filter((d) => d.folder && d.folder !== "—");
    if (routedList.length === 0) {
      return "No documents have been routed to destination folders yet.";
    }
    return `Current routing map of your uploaded documents:\n\n${routedList
      .map((d) => `- **${d.name}** → \`${d.folder}\``)
      .join("\n")}`;
  }

  if (q.includes("reject") || q.includes("failed")) {
    const rejectedList = docs.filter((x) => x.status === "rejected");
    if (rejectedList.length === 0) {
      return "Great news! None of your uploaded documents have been rejected.";
    }
    const d = matched && matched.status === "rejected" ? matched : rejectedList[0];
    const failed = (d.validation || []).filter((v) => !v.passed).map((v) => v.rule);
    return `**${d.name}** was rejected because the following validation checks failed:\n\n${failed.length > 0 ? failed.map((f) => `- ${f}`).join("\n") : "- Document confidence or integrity below threshold."}`;
  }

  if (q.includes("confidence") || q.includes("accuracy") || q.includes("score")) {
    const target = matched ?? docs[0];
    return `The Classification Agent scored **${target.name}** at **${target.conf}%** confidence for category *${target.cat}*. Anything below 80% is sent to the Validation Center for review.`;
  }

  if (q.includes("history") || q.includes("timeline") || q.includes("log")) {
    const target = matched ?? docs[0];
    if (!target.timeline || target.timeline.length === 0) {
      return `No detailed agent timeline available for **${target.name}**.`;
    }
    return `Processing timeline for **${target.name}**:\n\n${target.timeline
      .map((t) => `- ${t.at} · ${t.agent} — ${t.detail}`)
      .join("\n")}`;
  }

  if (q.includes("pending") || q.includes("review") || q.includes("attention")) {
    const list = docs.filter((d) => d.status === "review" || d.status === "processing");
    if (list.length === 0) {
      return "All uploaded documents have been processed. No documents require manual review at this time.";
    }
    return `${list.length} document(s) need attention right now:\n\n${list
      .map((d) => `- **${d.name}** (${statusMeta[d.status]?.label || d.status})`)
      .join("\n")}`;
  }

  return `You have **${docs.length}** document(s) stored in your database. You can ask me:\n- *"Where is [document name] routed?"*\n- *"What is the confidence score of [document]?"*\n- *"Which folders are assigned?"*\n- *"Are any documents pending review?"*`;
}
