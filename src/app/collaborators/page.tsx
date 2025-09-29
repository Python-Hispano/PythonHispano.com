import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaRocket } from "react-icons/fa6";

import { CollaboratorCard } from "@/components/ui/CollaboratorCard";
import { collaboratorsData } from "@/data/collaborators";
import { Collaborator } from "@/types/collaborator";

export const metadata: Metadata = {
  title: "Python Hispano | Colaboradores",
  description:
    "Descubre al equipo y a los miembros clave de la comunidad Python Hispano. Conoce a los desarrolladores, mentores y organizadores que impulsan el aprendizaje de Python en español.",
  openGraph: {
    title: "Python Hispano | Colaboradores",
    description:
      "Conoce a los miembros y colaboradores de la comunidad Python Hispano que hacen posible este proyecto.",
    url: "https://pythonhispano.com/collaborators",
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
    canonical: "https://pythonhispano.com/collaborators",
  },
};

const collaboratorsDataDisplay: Collaborator[] = collaboratorsData;

export default function CollaboratorsPage() {
  return (
    <section
      id="colaboradores"
      className="flex flex-col items-center py-12 pt-[calc(5rem+3rem)]"
    >
      <div className="container px-4 text-center">
        <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
          Conoce al Equipo de <span className="text-primary-python-blue">Python</span>{" "}
          <span className="text-primary-python-yellow">Hispano</span>
        </h1>
        <p className="text-foreground/70 mb-12 text-lg md:text-xl">
          Esta comunidad es posible gracias a la pasión y dedicación de nuestros miembros.
          Aquí te presentamos a los colaboradores clave que organizan eventos, mantienen
          los proyectos y ayudan a otros a crecer en su camino con Python.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {collaboratorsDataDisplay.map((collaborator) => (
            <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
          ))}
        </div>

        <div className="border-border bg-card/20 mt-24 rounded-lg border p-8 text-center shadow-lg">
          <h2 className="text-foreground text-3xl font-bold tracking-tighter">
            ¿Quieres ser parte del equipo?
          </h2>
          <p className="text-foreground/70 mx-auto mt-4 max-w-xl">
            Si te apasiona Python y quieres contribuir, siempre estamos buscando nuevos
            talentos para hacer crecer la comunidad.
          </p>
          <Link
            href="/join"
            className="bg-primary hover:bg-primary/90 text-primary-foreground mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md px-8 font-medium shadow transition-colors"
          >
            <FaRocket className="h-5 w-5" />
            Conviértete en Colaborador
          </Link>
        </div>
      </div>
    </section>
  );
}
