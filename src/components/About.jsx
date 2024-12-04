import React from "react";
import AboutImage from "../assets/images/About.svg";

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-slate-100 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-slate-100 text-4xl sm:text-5xl font-bold text-center mb-8">
                    Sobre mí
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
                    {/* Texto */}
                    <div className="md:w-1/2 text-center md:text-left px-4">
                        <p className="text-lg leading-relaxed mb-4">
                            Soy Héctor Martil, un desarrollador web apasionado
                            por la creación de experiencias digitales. Disfruto aprender y
                            mejorar constantemente mis habilidades en tecnologías como HTML,
                            CSS, JavaScript, y frameworks modernos como React y Tailwind CSS.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Además de mi amor por la tecnología, me encanta colaborar en
                            equipos y enfrentar nuevos desafíos. Estoy comprometido con
                            construir aplicaciones web eficientes, funcionales y visualmente
                            atractivas.
                        </p>
                    </div>
                    {/* Imagen */}
                    <div className="md:w-1/2 flex justify-center px-4">
                        <img
                            src={AboutImage}
                            alt="Developer"
                            className="w-64 md:w-80 self-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
