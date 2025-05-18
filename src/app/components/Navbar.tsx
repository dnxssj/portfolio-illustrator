'use client';
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#about" },
  { label: "Ilustraciones", href: "#portfolio" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
  const storedMode = localStorage.getItem("theme");
  if (storedMode) {
    setDarkMode(storedMode === "dark");
    document.documentElement.classList.toggle("dark", storedMode === "dark");
  } else {
    // Modo oscuro por defecto
    document.documentElement.classList.add("dark");
  }
}, []);

// Guardar el valor en localStorage y aplicar clase
useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light");
  document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);

  return (
<header className="fixed top-0 w-full bg-crema/80 dark:bg-fondo/90 backdrop-blur-md z-50 border-b border-rojo-secundario transition-colors duration-300">

    
      <nav className="flex items-center justify-between max-w-5xl mx-auto px-4 py-3">
      <h1 className="text-3xl font-bold text-rootbeer dark:text-white tracking-wide transition-colors">LERKA</h1>


        {/* Desktop links + icono modo */}
        <ul className="hidden md:flex gap-6 text-base font-medium items-center">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-rootbeer dark:text-white hover:text-black transition-colors"


              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 text-rojo-primario hover:text-rojo-secundario transition-colors"
              title="Cambiar modo"
            >
              {darkMode ? <Sun size={24} strokeWidth={2} /> : <Moon size={24} strokeWidth={2} />}
            </button>
          </li>
        </ul>

        {/* Mobile toggle + icono modo */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-rojo-primario hover:text-rojo-secundario"
            title="Cambiar modo"
          >
            {darkMode ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden bg-fondo/90 backdrop-blur-md px-4 pb-4 space-y-2 text-sm border-t border-rojo-secundario">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-white hover:text-rojo-secundario"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
