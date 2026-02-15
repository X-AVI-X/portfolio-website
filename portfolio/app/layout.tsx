import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avijit Paul | Backend & Platform Engineer",
  description: "Backend & Platform Engineer with 2 years of production experience. Expert in Java, Spring Boot, Microservices, and AI integration.",
  keywords: ["Backend Engineer", "Java", "Spring Boot", "Microservices", "Platform Engineer", "Software Engineer"],
  authors: [{ name: "Avijit Paul" }],
  openGraph: {
    title: "Avijit Paul | Backend & Platform Engineer",
    description: "Backend & Platform Engineer with 2 years of production experience in microservices and AI integration.",
    type: "website",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
