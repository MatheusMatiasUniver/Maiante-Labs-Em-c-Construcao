import type { Metadata } from "next";
import { Unbounded, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maiante Labs — Em Construção",
  description:
    "Um estúdio focado em backend criando APIs, plataformas SaaS e arquiteturas modernas.",
  keywords: ["backend", "SaaS", "microSaaS", "APIs", "sistemas escaláveis"],
  openGraph: {
    title: "Maiante Labs",
    description: "Construindo sistemas escaláveis e produtos digitais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${unbounded.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
