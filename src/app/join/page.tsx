import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Python Hispano | Colabora con nosotros",
  description:
    "¿Eres un apasionado de Python y quieres compartir tu conocimiento? Únete a la comunidad Python Hispano y colabora con nosotros. Contáctanos por email.",
  openGraph: {
    title: "Python Hispano | Colabora con nosotros",
    description:
      "¿Eres un apasionado de Python y quieres compartir tu conocimiento? Contáctanos.",
    url: "https://pythonhispano.com/join",
    images: [
      {
        url: "https://pythonhispano.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo de Python Hispano y texto de bienvenida a la comunidad",
      },
    ],
  },
  alternates: {
    canonical: "https://pythonhispano.com/join",
  },
};

export default function JoinPage() {
  return (
    <section
      id="join-us"
      className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-12 pt-32"
    >
      <div className="container max-w-2xl px-4 text-center">
        {" "}
        <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
          <span className="text-primary-python-blue">Únete</span> a la{" "}
          <span className="text-primary-python-yellow">Comunidad</span>
        </h1>
        <p className="text-foreground/70 mb-8 text-lg md:text-xl">
          Siempre estamos buscando mentes apasionadas y talentosas que quieran compartir
          su conocimiento y talento con la comunidad de Python Hispano.
        </p>
        <p className="text-foreground/70 mb-12 text-lg md:text-xl">
          Si tienes ideas para proyectos, tutoriales, eventos o simplemente quieres
          contribuir de alguna forma, ¡nos encantaría conocerte!
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-foreground text-2xl font-semibold md:text-3xl">
            ¡Contáctanos!
          </p>
          <Link
            href="mailto:contacto@pythonhispano.com"
            className="bg-primary-python-blue hover:bg-primary-python-yellow flex items-center gap-3 rounded-full px-6 py-3 text-lg font-bold text-white shadow-lg transition-colors duration-300 hover:text-gray-900"
            aria-label="Enviar correo a contacto@pythonhispano.com"
          >
            <FaEnvelope className="h-6 w-6" />
            contacto@pythonhispano.com
          </Link>
          <p className="text-foreground/60 mt-4 text-sm">
            Estaremos encantados de leer tu mensaje.
            <br /> ¡Te responderemos lo antes posible!
          </p>
        </div>
      </div>
    </section>
  );
}
