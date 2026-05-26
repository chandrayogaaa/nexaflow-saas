import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaFlow - Modern SaaS Platform",
  description: "Transform your workflow with AI-powered automation and analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
