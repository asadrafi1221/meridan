// app/layout.tsx
import { Manrope, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone } from "lucide-react";

// 1. Configure Manrope (Sans Font)
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

// 2. Configure Syne (Display Font)
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

// 3. Configure JetBrains Mono (Mono Font)
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "GMB Optimization",
  description: "Strategic digital growth partner for scaling businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} ${mono.variable}`}
    >
      <head>
        <link rel="icon" href="/header-logo.svg" />
      </head>
      <body className="antialiased selection:bg-[#0a0a0a] selection:text-white bg-[#fafafa] text-[#0a0a0a]">
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/923151885725"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[1000] bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <Phone size={24} />
        </a>
      </body>
    </html>
  );
}
