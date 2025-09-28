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
    "Únete a la comunidad de desarrolladores Python en español. Encuentra tutoriales, recursos, proyectos y ayuda para aprender y programar en español.",
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
  openGraph: {
    title: "Python Hispano | La Comunidad de Python en Español",
    description:
      "Únete a la comunidad de desarrolladores Python en español. Encuentra tutoriales, recursos, proyectos y ayuda para aprender y programar en español.",
    url: "https://pythonhispano.com",
    siteName: "Python Hispano",
    images: [
      {
        url: "https://pythonhispano.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo de Python Hispano y texto de bienvenida a la comunidad",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Hispano | La Comunidad de Python en Español",
    description:
      "Únete a la comunidad de desarrolladores Python en español. Encuentra tutoriales, recursos, proyectos y ayuda para aprender y programar en español.",
    images: ["https://pythonhispano.com/og-image.png"],
  },
  keywords:
    "Python, Python español, comunidad Python, aprender Python, tutoriales Python, recursos Python, programación en español, desarrolladores Python, Python Hispano",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Python Hispano",
  url: "https://pythonhispano.com",
  logo: "https://pythonhispano.com/logo.png",
  sameAs: [
    "https://github.com/Python-Hispano",
    // "https://twitter.com/PythonHispano",
    // "https://linkedin.com/company/python-hispano"
  ],
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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className="flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <WavyBackground containerClassName="flex-grow">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </WavyBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
