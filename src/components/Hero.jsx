// Hero.jsx con Soporte para Modo Oscuro
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: t('typedStrings', { returnObjects: true }),
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        });

        // Destruir instancia de Typed.js al desmontar el componente
        return () => {
            typed.destroy();
        };
    }, [t]);

    // Función para hacer scroll suave a una sección
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="bg-[#f5f4f7] dark:bg-gray-800 text-gray-800 dark:text-gray-200 h-screen flex flex-col justify-center items-center relative transition-colors duration-500"
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight">
                    Héctor Martil
                </h1>
                {/* Palabras animadas */}
                <span
                    className="text-3xl sm:text-4xl md:text-4xl text-gray-500 dark:text-gray-300 font-semibold"
                    ref={typedRef}
                ></span>
                <div className="mt-6 flex justify-center space-x-4">
                    {/* Botón Ver Proyectos */}
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("projects");
                        }}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-500 transition duration-300"
                    >
                        {t('viewProjects')}
                    </a>
                    {/* Botón Contáctame */}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                        className="border border-blue-600 dark:border-white text-blue-600 dark:hover:border-blue-600 dark:text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition duration-300"
                    >
                        {t('contactMe')}
                    </a>
                </div>
            </div>
            {/* Icono de Chevron */}
            <div className="absolute bottom-20 animate-bounce">
                <a
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("about");
                    }}
                    className="text-blue-500 dark:text-[#AF52DE] hover:text-blue-600 dark:hover:text-purple-400 transition duration-300"
                >
                    <FaChevronDown size={24} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
