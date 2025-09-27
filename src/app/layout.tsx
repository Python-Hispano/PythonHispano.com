import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Fira_Code, Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { WavyBackground } from "@/components/ui/WavyBackground";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Python Hispano | La Comunidad de Python en Español",
  description:
    "Únete a la comunidad de desarrolladores Python de habla hispana. Encuentra tutoriales, recursos, proyectos y ayuda para aprender y programar en español.",
  alternates: {
    canonical: "https://pythonhispano.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <WavyBackground className="h-full w-full">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </WavyBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
