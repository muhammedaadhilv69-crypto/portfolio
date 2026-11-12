import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aadhil — Developer & Builder",
    template: "%s | Aadhil",
  },
  description:
    "I'm Aadhil, a developer who enjoys building useful software, full-stack web applications, and tools that solve real problems.",
  applicationName: "Aadhil Portfolio",
  openGraph: {
    title: "Aadhil — Developer & Builder",
    description:
      "Building useful software, thoughtful web experiences, and tools that solve real problems.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d0c",
  colorScheme: "dark",
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
