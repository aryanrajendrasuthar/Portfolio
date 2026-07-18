"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

export function HeroSection() {
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
        <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-primary">
          4+ Years of Engineering Experience
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-foreground md:text-2xl md:leading-10">
          {profile.headline}
        </p>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {profile.subHeadline}
        </p>

        <p className="mt-8 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          Software engineer with 4+ years of experience across distributed
          systems, cloud-native microservices, event-driven architectures,
          and AI/ML applications.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/projects">
            <Button className="rounded-full px-6">
              Explore Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/resume">
            <Button variant="outline" className="rounded-full px-6">
              View Resume
            </Button>
          </Link>

          <a href={profile.resume} download target="_blank" rel="noreferrer">
            <Button variant="outline" className="rounded-full px-6">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {profile.location}
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-foreground"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 hover:text-foreground"
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
        <div className="absolute h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-3">
          <Image
            src={profile.heroImage}
            alt="Aryan Suthar"
            width={640}
            height={640}
            priority
            className="relative z-10 h-[34rem] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
