import Link from "next/link";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/layout/section-title";
import { certificates } from "@/data/certificates";

export function CertificatesSection() {
  const featuredCertificates = certificates.slice(0, 5);

  return (
    <section id="certifications" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Certifications"
        title="Continuous learning across cloud, Java, testing, DevOps, and AI"
        description="A curated certification wall showing formal learning across backend engineering, cloud platforms, software testing, and professional development."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredCertificates.map((certificate, index) => (
          <Card
            key={`${certificate.title}-${index}`}
            className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <CardContent className="p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                  <Award className="h-5 w-5 text-sky-300" />
                </div>
                <Badge className="rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.25em] text-slate-300">
                  {certificate.category}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {certificate.provider}
              </p>

              <p className="mt-3 text-sm text-slate-500">
                {certificate.issueDate
                  ? `Issued: ${certificate.issueDate}`
                  : "Issue date to be updated"}
              </p>

              <div className="mt-6">
                {certificate.file !== "#" ? (
                  <a href={certificate.file} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    disabled
                    className="rounded-full border-white/15 bg-white/5 text-slate-400"
                  >
                    Certificate Placeholder
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="rounded-[2rem] border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="flex h-full min-h-[280px] flex-col justify-between p-6">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                <Award className="h-5 w-5 text-violet-300" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                More Certificates
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Explore the full certification archive including cloud, Java,
                DevOps, testing, security, AI, and professional development credentials.
              </p>
            </div>

            <div className="mt-6">
              <Link href="/certificates">
                <Button className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                  View All Certificates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}