import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Regeneración en Colombia (1880-1900) | Periódico Histórico",
  description:
    "Gaceta histórica sobre la Regeneración en Colombia (1880-1900): antecedentes, reformas constitucionales, legado y análisis de opinión.",
  authors: [{ name: "Redacción Histórica" }],
  keywords: [
    "La Regeneración",
    "Colombia",
    "Rafael Núñez",
    "Constitución de 1886",
    "Historia de Colombia",
    "Federalismo Radical",
    "Guerra de los Mil Días",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-[#fcfaf2] text-[#1a1a1a] antialiased selection:bg-[#991b1b] selection:text-[#fcfaf2]">
        {children}
      </body>
    </html>
  );
}
