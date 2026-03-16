"use client";

import { useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m Aryan’s portfolio assistant. Ask me about his experience, tech stack, projects, certifications, or contact details.",
    },
  ]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "No response received." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong while contacting the assistant.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-sky-400/20 bg-white/10 text-white shadow-[0_0_30px_rgba(56,189,248,0.25)] backdrop-blur-xl transition hover:scale-105 hover:bg-white/15"
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[60] w-[22rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#08111f]/95 shadow-[0_0_50px_rgba(56,189,248,0.15)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-4 py-4">
            <p className="text-sm font-semibold text-white">Ask Aryan</p>
            <p className="mt-1 text-xs text-slate-400">
              Ask about experience, projects, skills, or certifications
            </p>
          </div>

          <div className="max-h-[22rem] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-sky-500/20 text-sky-100"
                    : "bg-white/5 text-slate-200"
                }`}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="max-w-[85%] rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-300">
                Thinking...
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="Ask about Kafka, projects, or experience..."
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <Button
              onClick={handleSend}
              disabled={loading}
              className="rounded-full bg-white text-slate-950 hover:bg-slate-200"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}