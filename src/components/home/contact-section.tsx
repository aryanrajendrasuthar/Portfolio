"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function ContactSection({ recruiterMode }: { recruiterMode: boolean }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({
    type: null,
    text: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          type: "error",
          text: data.error || "Something went wrong.",
        });
      } else {
        setStatus({
          type: "success",
          text: data.message || "Message sent successfully.",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Unable to send message right now.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(56,189,248,0.08)] backdrop-blur-xl md:p-10">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
          <div className="flex h-full flex-col">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Interested in backend, distributed systems, or AI engineering
              opportunities?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {recruiterMode
                ? "Open the resume, review featured projects, or reach out directly for backend, distributed systems, and software engineering opportunities."
                : "Let’s build something scalable. Reach out directly through the form or connect through LinkedIn, GitHub, or email."}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`}>
                <Button className="rounded-full bg-white px-6 text-slate-950 hover:bg-slate-200">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </Button>
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </a>

              <a href={profile.github} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
            </div>

            <div className="mt-8 flex-1 rounded-[1.75rem] border border-white/10 bg-black/20 p-6">
              <div className="mb-5 flex items-center gap-3">
                <User className="h-5 w-5 text-sky-300" />
                <h3 className="text-lg font-semibold text-white">
                  Quick Contact Card
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  Email: {profile.email}
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  LinkedIn: aryansuthar53
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  GitHub: aryanrajendrasuthar
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  Resume:{" "}
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-200"
                  >
                    Open PDF
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
          >
            <h3 className="text-xl font-semibold text-white">Send a message</h3>

            <p className="mt-2 text-sm text-slate-400">
              Fill this out and submit directly from the portfolio.
            </p>

            <div className="mt-6 flex flex-1 flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <textarea
                placeholder="Your message"
                rows={10}
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                className="min-h-[260px] w-full flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <Button
                type="submit"
                disabled={loading}
                className="mt-auto w-full rounded-full bg-white text-slate-950 hover:bg-slate-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {status.type && (
                <div
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border border-green-500/20 bg-green-500/10 text-green-300"
                      : "border border-red-500/20 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.text}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
