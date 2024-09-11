"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Missao: React.FC = () => {
    useEffect(() => {
        gsap.utils.toArray('.title-fade-in-up').forEach((element: any) => {
            gsap.fromTo(
                element,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.title-fade-in-up',
                        start: 'top 90%',
                        toggleActions: 'play none none reset', // Reseta a animação quando o elemento sai da viewport
                    },
                }
            );
        });
    }, []);

    return (
        <section className="bg-nf1-fundo text-nf1-branco border-t-4 py-16 px-10 flex justify-center items-center flex-col text-center w-screen ">
            <div className="title-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold italic mb-4">
                    <span >Nossa </span>
                    <span className="relative inline-block">
                        <span className="relative z-10"> missão</span>
                        <span className="absolute inset-0 bg-[#53B4DB] z-0" style={{ height: '1,3em', bottom: 0 }}></span>
                    </span>
                </h2>
            </div>
            <p className="text-lg md:text-2xl font-medium max-w-xl fade-in-up">
                Transformar a sociedade a partir da <span className="font-bold">reconciliação do homem com Deus</span>.
            </p>
        </section>
    );
};

export default Missao;
