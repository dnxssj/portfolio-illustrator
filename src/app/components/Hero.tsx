"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4 
                 bg-crema text-black dark:bg-fondo dark:text-crema transition-colors duration-300"
    >
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-rojo-base font-medium">
          Soy{" "}
          <span className="text-6xl sm:text-7xl lg:text-8xl text-rojo-acento font-extrabold drop-shadow-md animate-pulse inline-block align-middle">
            Lerka
          </span>
        </h2>
      </div>

      <p className="text-xl sm:text-2xl lg:text-3xl max-w-2xl mx-auto leading-relaxed 
                    text-gray-900 dark:text-crema">
        Ilustradora digital apasionada por los colores, los personajes y contar
        historias a través del arte.
      </p>
    </section>
  );
}
