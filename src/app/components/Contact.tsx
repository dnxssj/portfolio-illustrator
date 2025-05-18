"use client";
import { Instagram, Mail } from "lucide-react";
import { motion } from "../../../lib/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 py-20 text-center scroll-mt-24 text-black dark:text-crema transition-colors duration-300"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-rojo-primario mb-12">
        <span className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-rojo-secundario after:rounded-full after:animate-pulse">
          Contacto
        </span>
      </h2>

      <p className="text-xl mb-8">
        Podéis encontrarme o escribirme directamente en cualquiera de estas plataformas:
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        <a
          href="https://instagram.com/lerka.art"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-vividred dark:text-crema dark:hover:text-rojo-secundario transition-colors hover:scale-110"
          title="Instagram"
        >
          <Instagram size={32} />
        </a>

        <a
            href="https://discord.gg/leerkka._."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-vividred dark:text-crema dark:hover:text-rojo-secundario transition-colors hover:scale-110"
            title="Discord"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a19.736 19.736 0 0 0-5.888 0 12.533 12.533 0 0 0-.617-1.25.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.683 4.37a.07.07 0 0 0-.032.027C.533 9.08-.32 13.627.099 18.125a.078.078 0 0 0 .031.052 19.9 19.9 0 0 0 5.993 3.033.077.077 0 0 0 .084-.027c.46-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104 13.134 13.134 0 0 1-1.885-.9.077.077 0 0 1-.008-.129c.126-.095.252-.193.373-.291a.074.074 0 0 1 .077-.01c3.927 1.79 8.18 1.79 12.061 0a.074.074 0 0 1 .078.009c.122.098.247.196.374.292a.077.077 0 0 1-.006.129 12.252 12.252 0 0 1-1.886.899.076.076 0 0 0-.04.105c.36.698.773 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.841 19.841 0 0 0 6.002-3.034.077.077 0 0 0 .03-.051c.5-5.177-.838-9.673-3.548-13.73a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.18 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.177 1.095 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.18 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.177 1.095 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
            </svg>
        </a>


        <a
          href="mailto:contacto@lerka.art"
          className="hover:text-vividred dark:text-crema dark:hover:text-rojo-secundario transition-colors hover:scale-110"
          title="Email"
        >
          <Mail size={32} />
        </a>

      </div>
    </section>
  );
}
