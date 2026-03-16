import { Github, Linkedin, Mail, FileText, BookOpen } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="text-sm font-medium text-white">Aryan Rajendra Suthar</p>
          <p className="mt-1 text-sm text-slate-400">
            Backend, distributed systems, cloud-native engineering, and AI applications.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
          <a href="/resume" className="transition hover:scale-110 hover:text-white">
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" /> Resume
            </span>
          </a>
          <a href="/notes" className="transition hover:scale-110 hover:text-white">
            <span className="inline-flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Notes
            </span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:scale-110 hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:scale-110 hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:scale-110 hover:text-white"
          >
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}