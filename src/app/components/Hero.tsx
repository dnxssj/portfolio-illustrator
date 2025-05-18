"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const fullText = "Ilustradora digital apasionada por los colores, los personajes y contar historias a través del arte.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 30); // velocidad

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4 
                 text-black dark:text-crema transition-colors duration-300"
    >
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-rojo-base font-medium">
          Soy{" "}
          <span className="text-6xl sm:text-7xl lg:text-8xl text-rojo-acento font-extrabold drop-shadow-md animate-pulse inline-block align-middle">
            Lerka
          </span>
        </h2>
      </div>

      <p className="text-xl sm:text-2xl lg:text-3xl max-w-2xl mx-auto leading-relaxed text-gray-900 dark:text-crema min-h-[100px]">
        {displayedText}
      </p>
    </section>
  );
}
