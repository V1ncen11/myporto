import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Kevin | Creative Developer",
  description: "Premium digital experiences crafted by Vincen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased bg-[#050505] text-white selection:bg-white/20`} style={spaceGrotesk.style}>
        {children}
      </body>
    </html>
  );
}
