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
    "Backend-focused software engineer with 4+ years building distributed, cloud-native applications and AI-integrated data platforms — event-driven architecture, microservices, and data pipelines across AWS and Azure.",
  metadataBase: new URL("https://aryan-suthar-portfolio.vercel.app"),
  openGraph: {
    title: "Aryan Suthar — Software Engineer",
    description:
      "Backend-focused software engineer with 4+ years building distributed, cloud-native applications and AI-integrated data platforms — event-driven architecture, microservices, and data pipelines across AWS and Azure.",
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
      "Backend-focused software engineer with 4+ years building distributed, cloud-native applications and AI-integrated data platforms — event-driven architecture, microservices, and data pipelines across AWS and Azure.",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var isDark=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',isDark);}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
