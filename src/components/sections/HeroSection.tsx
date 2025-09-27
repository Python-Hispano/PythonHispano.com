import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa6";

import { CodeBlock } from "@/components/ui/CodeBlock";

const ColorfulText = ({ text }: { text: string }) => {
  const pythonColors = ["#3B82F6", "#FBBF24"];

  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={index} style={{ color: pythonColors[index % pythonColors.length] }}>
          {word}{" "}
        </span>
      ))}
    </>
  );
};

export function HeroSection() {
  const pythonCode = `
def greetings(comunidad: str) -> None:
    print(f"¡Hola, {comunidad}!")

greetings("Python Hispano")
# ¡Hola, Python Hispano!
  `;

  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden py-12"
    >
      <div className="container mt-0 px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left col, logo */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/logo.png"
              alt="Logo grande de Python Hispano"
              width={1024}
              height={1024}
              priority
              className="animate-wiggle h-auto w-[1024px] sm:w-[1024px] lg:w-[1024px]"
            />
          </div>

          {/* Right col, text, code and buttons  */}
          <div className="animate-fade-in-up flex flex-col items-center text-center">
            <h1 className="flex flex-col text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span>Bienvenid@ a </span>
              <span>
                <ColorfulText text="Python Hispano" />
              </span>
            </h1>

            <p className="text-foreground/80 mt-4 max-w-[600px] md:text-xl">
              La comunidad de código abierto para{" "}
              <span className="font-bold">entusiastas de Python en español</span>.
              Encuentra tutoriales, recursos y proyectos. Aprende, colabora y construye
              con nosotros.
            </p>

            <pre className="font-fira-code bg-card border-border mt-6 w-full max-w-md overflow-x-auto rounded-lg border p-2 text-left text-sm">
              <CodeBlock code={pythonCode} lang="python" />
            </pre>

            <div className="mt-8 flex max-w-xs flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/Python-Hispano"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium shadow transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-card hover:bg-border inline-flex h-12 items-center justify-center gap-2 rounded-md border px-6 text-sm font-medium shadow transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://discord.gg/J5AJNkeDjP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium shadow transition-colors"
              >
                <FaDiscord className="h-5 w-5" />
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
