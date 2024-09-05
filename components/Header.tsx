'use client';
import React from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    function handleOpenMenu() {
        console.log("Clicou no botão de menu");

        setMenuOpen(!menuOpen);
    }
    return (
        <header className="md:flex block w-full">
            {/* Primeira Coluna (Logotipo) com fundo mais claro e 15% de largura */}
            <div className="bg-nf1-fundohead flex items-center p-4 w-full md:w-1/6 min-w-44">
                <img src="img/nf-branco.png" alt="Logotipo" className="h-20 mx-auto" />

                <button className="md:hidden flex" onClick={handleOpenMenu}>
                    <FaBars className="text-nf1-branco text-2xl" />
                </button>
            </div>

            {/* Segunda Coluna (Navegação e Botão de Login) com fundo mais escuro e 85% de largura */}
            <div className="bg-nf1-fundo hidden md:flex text text-nf1-branco flex-wrap justify-between items-center p-4 w-full md:w-5/6">
                {/* Links de Navegação */}
                <nav className="flex-grow flex justify-center gap-5 lg:text-lg md:text-sm">
                    <a href="#" className="hover:text-nf1-fundohead transition">IGREJA</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">CONECTE-SE</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">EVENTOS</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">SERMÕES</a>
                    <a href="#" className="hover:text-nf1-fundohead transition">DOAÇÕES</a>
                </nav>

                {/* Botão de Login */}
                <div className="flex items-center">
                    <button className="bg-nf1-branco text-nf1-fundo font-semibold py-2 px-6 lg:text-lg md:text-sm rounded-full hover:bg-nf1-fundo1 transition">
                        LOGIN
                    </button>
                </div>
            </div>

            {/* Menu de Navegação para Dispositivos Móveis */}
            {menuOpen && (
                <div className="bg-nf1-dark block md:flex text text-nf1-branco flex-wrap justify-between items-center p-4 w-full md:w-5/6">
                    <nav className="flex-grow flex flex-col justify-center items-center gap-3 lg:text-lg md:text-sm">
                        <a href="#" className="hover:text-nf1-fundohead transition">IGREJA</a>
                        <a href="#" className="hover:text-nf1-fundohead transition">CONECTE-SE</a>
                        <a href="#" className="hover:text-nf1-fundohead transition">EVENTOS</a>
                        <a href="#" className="hover:text-nf1-fundohead transition">SERMÕES</a>
                        <a href="#" className="hover:text-nf1-fundohead transition">DOAÇÕES</a>
                    </nav>
                    <div className="flex items-center justify-center">
                        <button className="bg-nf1-branco text-nf1-fundo font-semibold py-2 px-6 lg:text-lg md:text-sm rounded-full hover:bg-nf1-fundo1 transition mt-3">
                            LOGIN
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
