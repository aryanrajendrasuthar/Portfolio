"use client";

import { Sparkles } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type NavbarProps = {
  recruiterMode: boolean;
  setRecruiterMode: (value: boolean) => void;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ recruiterMode, setRecruiterMode }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-md">
      <a href="#home" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(99,102,241,0.15)]">
          <Sparkles className="h-5 w-5 text-sky-300" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide">Aryan Suthar</p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">
            Engineer Control Room
          </p>
        </div>
      </a>

      <nav className="hidden items-center gap-5 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-xs transition duration-200 hover:scale-125 ${
              recruiterMode
                ? "text-slate-300 hover:text-green-300"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div
        className={`relative flex items-center gap-3 rounded-full border px-4 py-2 transition-all duration-300 ${
          recruiterMode
            ? "border-green-500/40 bg-green-500/10 shadow-[0_0_25px_rgba(34,197,94,0.55)]"
            : "border-white/10 bg-white/5"
        }`}
      >
        {recruiterMode && (
          <div className="absolute inset-0 rounded-full animate-pulse bg-green-500/10 pointer-events-none" />
        )}

        <span
          className={`relative z-10 text-[10px] uppercase tracking-[0.25em] transition-colors ${
            recruiterMode ? "text-green-400" : "text-slate-400"
          }`}
        >
          Recruiter
        </span>

        <Switch
          checked={recruiterMode}
          onCheckedChange={setRecruiterMode}
          className="relative z-10 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-slate-600"
        />
      </div>
    </header>
  );
}
