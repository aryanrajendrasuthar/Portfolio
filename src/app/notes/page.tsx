import Link from "next/link";
import { ArrowRight, ArrowLeft, BookOpen, Layers3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-[#030712] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main page
          </Link>
        </div>

        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-slate-400">
            System Design Notes
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Engineering Notes & Architecture Thinking
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            A curated knowledge section covering distributed systems, backend
            architecture, performance engineering, and practical security ideas
            tied to the projects in this portfolio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <Link key={note.slug} href={`/notes/${note.slug}`}>
              <Card className="group h-full rounded-[2rem] border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.07] backdrop-blur-xl">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                      <BookOpen className="h-5 w-5 text-sky-300" />
                    </div>

                    <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.25em] text-slate-300">
                      {note.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {note.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {note.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                    <span>{note.level}</span>
                    <span>•</span>
                    <span>{note.readTime}</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {note.bullets.map((bullet, index) => (
                      <Badge
                        key={`${note.slug}-bullet-${index}`}
                        className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] text-slate-300"
                      >
                        {bullet}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/8 bg-black/20 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      Related Project
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                      <Layers3 className="h-4 w-4 text-sky-300" />
                      {note.relatedProject}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 flex items-center text-sm text-sky-300">
                    Read note <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}