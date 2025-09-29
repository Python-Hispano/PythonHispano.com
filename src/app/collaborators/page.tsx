import { Metadata } from "next";
import React from "react";

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
      </div>
    </section>
  );
}
