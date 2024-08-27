import React from "react";
import Image from "next/image";


export default function Header() {
    return (
        <header className="flex w-full">
            {/* Primeira Coluna (Logotipo) com fundo mais claro e 15% de largura */}
            <div className="bg-nf1-fundohead flex items-center p-4 w-full md:w-1/6">
                <img src="img/nf-branco.png" alt="Logotipo" className="h-20 mx-auto" />
            </div>

            {/* Segunda Coluna (Navegação e Botão de Login) com fundo mais escuro e 85% de largura */}
            <div className="bg-nf1-fundo  text text-nf1-branco flex flex-wrap justify-between items-center p-4 w-full md:w-5/6">
                {/* Links de Navegação */}
                <nav className="flex-grow flex justify-center space-x-4 md:space-x-14 text-lg md:text-base">
                    <a href="#" className="hover:text-nf1-fundohead transition">IGREJA</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">CONECTE-SE</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">EVENTOS</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">SERMÕES</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">DOAÇÕES</a>
                </nav>

                {/* Botão de Login */}
                <div className="flex items-center">
                    <button className="bg-nf1-branco text-nf1-fundo font-semibold py-2 px-6 rounded-full hover:bg-nf1-fundo1 transition">
                        LOGIN
                    </button>
                </div>
            </div>
        </header>
    );
}
