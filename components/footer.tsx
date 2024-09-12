import React from "react";
import Image from "next/image";


export default function Footer() {
  return (
    <div className="bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center sm:space-x-4 mb-2 md:mb-0 md:w-1/4 sm:pl-12">
          <img
            src="img/nf-branco.png"
            alt="Logotipo"
            className="h-36 w-46 -mx-32  sm:h-28 sm:w-36 sm:-mx-16 md:h-32 md:w-40 md:-mx-24  lg:h-36 lg:w-46 lg:-mx-32"
          />
        </div>
        <div className="h-40 border-l border-gray-300 hidden md:block"></div>
        <div className="flex flex-col sm:flex-row sm:px-20  sm:space-x-24 md:space-x-32">
          <div>
            <h3 className="sm:text-base text-2xl font-semibold font-title mt-8">CONECTE-SE</h3>
            <ul className="mt-2 space-y-2 sm:text-sm text-base">
              <li><a href="#">Pequenos Núcleos</a></li>
              <li><a href="#">Nos Faça uma Visita</a></li>
            </ul>
          </div>

          <div>
            <h3 className="sm:text-base text-2xl font-semibold font-title mt-8">MINISTÉRIOS</h3>
            <ul className="mt-2 space-y-2 sm:text-sm text-base">
              <li><a href="#">Núcleo Kids</a></li>
              <li><a href="#">Núcleo Jovem</a></li>
              <li><a href="#">Ministério de Mulheres</a></li>
              <li><a href="#">E Mais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="sm:text-base text-2xl font-semibold font-title mt-8">CONTATO</h3>
            <ul className="mt-2 space-y-2 sm:text-sm text-base">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Gostaria de uma Oração?</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
