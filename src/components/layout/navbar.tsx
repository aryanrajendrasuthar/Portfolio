"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-5 backdrop-blur-md sm:px-6">
      <a href="#home" className="flex min-w-0 items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src={profile.heroImage}
            alt={profile.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-wide">
            Aryan Suthar
          </p>
          <p className="hidden text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:block">
            Software Engineer
          </p>
        </div>
      </a>

      <nav className="hidden items-center gap-5 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs text-muted-foreground transition hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="rounded-full"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </header>
  );
}
