import { Manrope, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    // Added ${mono.variable} to the className below
    <html
      lang="en"
      className={`${manrope.variable} ${syne.variable} ${mono.variable}`}
    >
      <body className="antialiased selection:bg-[#0a0a0a] selection:text-white bg-[#fafafa] text-[#0a0a0a]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
