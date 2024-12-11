// About.jsx con Soporte para Modo Oscuro
import React from "react";
import AboutImage from "../assets/images/About.svg";
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section
            id="about"
            className="bg-[#f5f4f7] dark:bg-gray-800 text-gray-600 dark:text-gray-200 py-20 transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    {t('about')}
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
                    {/* Texto */}
                    <div className="lg:w-1/2 text-center lg:text-left px-4">
                        <p className="text-lg leading-relaxed mb-4">
                            {t('aboutParagraph1')}
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            {t('aboutParagraph2')}
                        </p>
                    </div>
                    {/* Imagen */}
                    <div className="lg:w-1/2 flex justify-center px-4">
                        <img
                            src={AboutImage}
                            alt={t('developerImageAlt')}
                            className="w-64 lg:w-80 self-center transition-transform duration-500 dark:filter dark:invert"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
