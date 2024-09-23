import "@coinbase/onchainkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { NEXT_PUBLIC_URL } from "../config";
import "./global.css";

// Dynamically import providers to disable server-side rendering (ssr: false)
const OnchainProviders = dynamic(() => import("src/components/OnchainProviders"), {
  ssr: false,
});

// Metadata object handling SEO, openGraph, and PWA manifest
export const metadata: Metadata = {
  title: "TRASH - Beta",
  description: "A Tokenized Circular Economy for Sustainable Fashion.",
  openGraph: {
    title: "TRASH - Beta",
    description: "A Tokenized Circular Economy for Sustainable Fashion.",
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
  },
  icons: {
    icon: "/favicon.ico", // Optional: specify icons if needed
  },
  manifest: "/manifest.json", // Link to your PWA manifest
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
