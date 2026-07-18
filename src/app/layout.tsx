import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Suthar — Software Engineer",
  description:
    "Backend and distributed systems engineer with 4+ years building high-throughput microservices, cloud-native deployments, and AI-integrated search pipelines.",
  metadataBase: new URL("https://aryan-suthar-portfolio.vercel.app"),
  openGraph: {
    title: "Aryan Suthar — Software Engineer",
    description:
      "Backend and distributed systems engineer with 4+ years building high-throughput microservices, cloud-native deployments, and AI-integrated search pipelines.",
    url: "https://aryan-suthar-portfolio.vercel.app",
    siteName: "Aryan Suthar Portfolio",
    images: [
      {
        url: "/images/profile/aryan-profile-themed.png",
        width: 1200,
        height: 630,
        alt: "Aryan Suthar — Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Suthar — Software Engineer",
    description:
      "Backend and distributed systems engineer with 4+ years building high-throughput microservices, cloud-native deployments, and AI-integrated search pipelines.",
    images: ["/images/profile/aryan-profile-themed.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
