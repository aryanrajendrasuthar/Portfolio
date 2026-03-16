import Link from "next/link";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
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
            Certificates
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Certification Archive
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
            A full archive of certifications across cloud, backend engineering,
            Java, testing, DevOps, security, AI, and professional development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
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
        </div>
      </div>
    </div>
  );
}
