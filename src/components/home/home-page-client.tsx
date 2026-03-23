"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { ArchitectureSection } from "@/components/home/architecture-section";
import { SupportingSkillsSection } from "@/components/home/supporting-skills-section";
import { CertificatesSection } from "@/components/home/certificates-section";
import { ContactSection } from "@/components/home/contact-section";
import { GradientOrb } from "@/components/home/gradient-orb";
import { SystemsNetworkBackground } from "@/components/home/systems-network-background";
import { AIAssistant } from "@/components/home/ai-assistant";

type Props = {
  githubSection: React.ReactNode;
};

export function HomePageClient({ githubSection }: Props) {
  const [recruiterMode, setRecruiterMode] = useState(false);

  return (
    <div
      className={`min-h-screen text-white transition-colors duration-500 ${
        recruiterMode ? "bg-[#020a05]" : "bg-[#030712]"
      }`}
    >
      <div className="relative overflow-hidden">
        <GradientOrb className="-left-20 top-20 h-72 w-72" />
        <GradientOrb className="right-0 top-0 h-96 w-96" />
        <GradientOrb className="bottom-10 left-1/3 h-80 w-80" />

        <div
          className={`absolute inset-0 -z-10 transition-all duration-500 ${
            recruiterMode
              ? "bg-[radial-gradient(circle_at_top,rgba(22,163,74,0.18),transparent_30%),linear-gradient(to_bottom,rgba(2,10,5,0.88),rgba(2,10,5,1))]"
              : "bg-[radial-gradient(circle_at_top,rgba(76,29,149,0.22),transparent_30%),linear-gradient(to_bottom,rgba(3,7,18,0.82),rgba(3,7,18,1))]"
          }`}
        />

        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

        {recruiterMode && (
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.10),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.08),transparent_18%),radial-gradient(circle_at_60%_70%,rgba(34,197,94,0.06),transparent_22%)]" />
        )}

        <SystemsNetworkBackground />

        <Navbar
          recruiterMode={recruiterMode}
          setRecruiterMode={setRecruiterMode}
        />

        <main className="relative z-10">
          <HeroSection
            recruiterMode={recruiterMode}
            setRecruiterMode={setRecruiterMode}
          />
          <ExperienceSection />
          <FeaturedProjectsSection recruiterMode={recruiterMode} />
          <ArchitectureSection recruiterMode={recruiterMode} />
          <SupportingSkillsSection recruiterMode={recruiterMode} />
          <CertificatesSection />
          {githubSection}
          <ContactSection recruiterMode={recruiterMode} />
          <Footer />
        </main>
        <AIAssistant />
      </div>
    </div>
  );
}
