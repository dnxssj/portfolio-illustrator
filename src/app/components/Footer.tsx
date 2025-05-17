export default function Footer() {
  return (
    <footer className="bg-black text-crema text-center py-6 border-t border-rojo-secundario">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base">
        <span className="flex items-center gap-2">
          <span className="text-rojo-secundario">✦</span>
          © {new Date().getFullYear()} Lerka — Todos los derechos reservados
        </span>
        <div className="flex gap-4 items-center">
          <a
            href="mailto:contacto@lerka.art"
            className="hover:text-rojo-secundario transition-colors"
          >
            contacto@lerka.art
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="https://instagram.com/lerka.art"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rojo-secundario transition-colors"
          >
            @lerka.art
          </a>
        </div>
      </div>
    </footer>
  );
}
