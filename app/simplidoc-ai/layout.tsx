import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SimpliDoc AI - Project Showcase",
  description: "AI-Powered Document Management & Chat Platform - Transform your documents into intelligent conversations with AI",
};

export default function SimpliDocAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

