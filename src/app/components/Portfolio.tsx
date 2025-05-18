"use client";
import { useState } from "react";
import { motion } from "../../../lib/motion";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const closeModal = () => setSelectedImg(null);

  return (
<section
  className="max-w-5xl mx-auto px-4 pb-16 
             text-black dark:text-crema transition-colors duration-300"
>
      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeModal}
        >
          <img
            src={selectedImg}
            alt="Ilustración ampliada"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-rojo-primario mb-16 text-center scroll-mt-24"
      >
        <span className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-rojo-secundario after:rounded-full after:animate-pulse">
          Ilustraciones
        </span>
      </motion.h2>

      {/* Galería */}
      <div className="columns-1 sm:columns-2 gap-6 space-y-6">
        {[1, 2, 3, 4].map((i, index) => {
          const marginTop = {
            1: "mt-0",
            2: "mt-16",
            3: "mt-6",
            4: "mt-24",
          }[i];

          return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`break-inside-avoid border-4 border-rojo-secundario shadow-lg w-fit h-fit mx-auto relative group hover:animate-anime-pulse ${marginTop}`}
          >
            <img
              src={`/portfolio/obra${i}.jpg`}
              alt={`Ilustración ${i}`}
              onClick={() => setSelectedImg(`/portfolio/obra${i}.jpg`)}
              className="block w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-zoom-in"
            />

            <span className="absolute bottom-2 right-2 text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none select-none text-white dark:text-crema">
              @vval.mp4
            </span>
          </motion.div>







          );
        })}
      </div>
    </section>
  );
}
