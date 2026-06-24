import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
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
  metadataBase: new URL(SITE_URL),
  title: "AI 데일리 브리핑 | 매일 아침 AI 개발자 뉴스",
  description:
    "매일 아침 업데이트되는 AI, LLM, 개발자 트렌드 브리핑. Tech Deep Dive, Hype Check, 주요 뉴스를 한눈에.",
  keywords:
    "AI 뉴스, AI 브리핑, LLM, 생성형 AI, AI 에이전트, 개발자 뉴스, AI 트렌드, 데일리 브리핑",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "AI 데일리 브리핑 | 매일 아침 AI 개발자 뉴스",
    description:
      "매일 아침 업데이트되는 AI, LLM, 개발자 트렌드 브리핑. Tech Deep Dive, Hype Check, 주요 뉴스를 한눈에.",
    type: "website",
    url: SITE_URL,
    siteName: "AI 데일리 브리핑",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 데일리 브리핑 | 매일 아침 AI 개발자 뉴스",
    description:
      "매일 아침 업데이트되는 AI, LLM, 개발자 트렌드 브리핑. Tech Deep Dive, Hype Check, 주요 뉴스를 한눈에.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={JSON.stringify({
            token: "bf6b670bba864f1ab6c03c4e0dfedb75",
          })}
        />
      </body>
    </html>
  );
}
