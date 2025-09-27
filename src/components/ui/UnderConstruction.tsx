import Link from "next/link";
import { FaHardHat } from "react-icons/fa";

export function UnderConstruction() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
      <FaHardHat className="text-accent h-16 w-16" />
      <h1 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl">
        Página en Construcción
      </h1>
      <p className="text-foreground/70 mt-4 max-w-md">
        Estamos trabajando duro para traerte esta sección lo antes posible. ¡Vuelve
        pronto!
      </p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-8 inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium shadow transition-colors"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
