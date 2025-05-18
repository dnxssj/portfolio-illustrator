"use client";

import { motion } from "../../../lib/motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 pb-16 text-black dark:text-crema transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-rojo-primario mb-16 text-center scroll-mt-24"
      >
        <span className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-rojo-secundario after:rounded-full after:animate-pulse">
          Sobre mí
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl lg:text-2xl leading-relaxed space-y-6"
      >
        <p>
          Soy Valeria, también conocida como <strong className="text-rojo-acento">Lerka</strong>, una ilustradora
          digital con pasión por los colores intensos ... Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12"
      >
      </motion.div>
    </section>
  );
}
