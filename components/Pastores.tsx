import React from "react";
import Image from "next/image";


export default function Pastores() {
  return (
    <div className="flex justify-center items-center text-white mx-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg md:space-x-4 space-y-8 md:space-y-0">
        {/* Primeira Coluna */}
        <div className="flex flex-col justify-center md:justify-left mx-4 md:mx-14">
          <h1 className="text-4xl md:text-6xl font-bold font-title mb-4">Nossos Pastores</h1>
          <img 
            src="ibi.jpg" 
            alt="Imagem" 
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* Segunda Coluna */}
        <div className="flex flex-col justify-center items-center md:justify-end md:items-center">
          <p className="text-lg text-justify mb-6 md:mb-12 mx-4 md:mx-10">
            Neste campo iremos incluir um texto sobre nossos pastores e o que mais a equipe de Copywrite definir.
            Neste campo iremos incluir um texto sobre nossos pastores e o que mais a equipe de Copywrite definir.
          </p>
          <button className="bg-white hover:bg-nf1-branco/30 text-nf1-branco/70 font-semibold py-2 px-4 border border-gray-400 rounded shadow transition-colors">
            Nossos Pastores
          </button>
        </div>
      </div>
    </div>
  );
}
