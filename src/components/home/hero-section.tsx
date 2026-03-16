"use client";

import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function HeroSection({ recruiterMode }: { recruiterMode: boolean }) {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6 inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-sky-200">
          3 Years of Engineering Experience
        </div>
        {recruiterMode && (
          <div className="mb-6 inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-green-300 shadow-[0_0_20px_rgba(34,197,94,0.25)]">
            Recruiter Mode Active
          </div>
        )}

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-200 md:text-2xl md:leading-10">
          {profile.headline}
        </p>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">
          {profile.subHeadline}
        </p>

        <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
          {recruiterMode
            ? "Backend engineer specializing in distributed systems, cloud-native microservices, and event-driven architectures."
            : "Software engineer with 3 years of experience across backend systems, distributed architecture, cloud-native engineering, and AI-powered applications."}
        </p>
        {recruiterMode && (
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-300">
              Java
            </span>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-300">
              Spring Boot
            </span>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-300">
              AWS
            </span>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-300">
              Kafka
            </span>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-300">
              Distributed Systems
            </span>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/projects">
            <Button className="rounded-full bg-white px-6 text-slate-950 hover:bg-slate-200">
              {recruiterMode ? "View Top Projects" : "Explore Projects"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <Button
            variant="outline"
            className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
          >
            {recruiterMode ? "Open Resume" : "View Experience"}
          </Button>

          {!recruiterMode && (
            <Button
              variant="outline"
              className="rounded-full border-sky-400/20 bg-sky-400/10 px-6 text-sky-100 hover:bg-sky-400/20"
            >
              Open Recruiter Mode
            </Button>
          )}

          <Button
            variant="outline"
            className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {profile.location}
          </div>
          <a
            href={profile.linkedin}
            className="flex items-center gap-2 hover:text-white"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={profile.github}
            className="flex items-center gap-2 hover:text-white"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 hover:text-white"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative mx-auto flex w-full max-w-xl items-center justify-center"
      >
        <div className="absolute h-[28rem] w-[28rem] rounded-full border border-sky-400/15 bg-[radial-gradient(circle,rgba(56,189,248,0.22),rgba(99,102,241,0.1),rgba(0,0,0,0)_70%)] blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_0_100px_rgba(56,189,248,0.12)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(124,58,237,0.14),transparent)]" />
          <img
            src={profile.heroImage}
            alt="Aryan Suthar"
            className="relative z-10 h-[34rem] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
