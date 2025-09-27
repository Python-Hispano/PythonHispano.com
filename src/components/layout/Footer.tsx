export function Footer() {
  return (
    <footer className="border-border w-full border-t">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-6 text-center sm:flex-row">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Python Hispano. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
