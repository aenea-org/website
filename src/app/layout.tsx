import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AENEA - Progettare Hardware alla velocità del Software",
  description: "L'EDA moderno per team che non hanno tempo da perdere. AENEA rimuove la complessità dei tool tradizionali e ti permette di passare dall'idea al design in minuti, non giorni.",
  keywords: ["EDA", "hardware design", "chip design", "electronic design automation", "AENEA"],
  authors: [{ name: "AENEA" }],
  openGraph: {
    title: "AENEA - Progettare Hardware alla velocità del Software",
    description: "L'EDA moderno per team che non hanno tempo da perdere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
