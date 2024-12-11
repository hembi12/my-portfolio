// Resume.jsx
import React from "react";
import ResumeImage from "../assets/images/Resume.svg";
import { useTranslation } from 'react-i18next';

const Resume = () => {
    const { t } = useTranslation();

    return (
        <section
            id="Resume"
            className="py-20 bg-[#f5f4f7] text-white"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    {t('resume')}
                </h2>
                {/* Contenido principal */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Lado izquierdo: Texto y opciones */}
                    <div className="md:w-1/2 text-gray-600 text-center md:text-left flex flex-col justify-center px-4">
                        <p className="text-lg leading-relaxed mb-6">
                            {t('resumeDescription')}
                        </p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                            <a
                                href="/assets/CV/Hector_Martil_CV.pdf" // Ruta correcta para visualizar el PDF
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-500 transition duration-300"
                            >
                                {t('viewResume')}
                            </a>
                            <a
                                href="/assets/CV/Hector_Martil_CV.pdf" // Ruta correcta para descargar el PDF
                                download="Hector_Martil_CV.pdf"
                                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white transition duration-300"
                            >
                                {t('downloadResume')}
                            </a>
                        </div>
                    </div>
                    {/* Lado derecho: Imagen */}
                    <div className="md:w-1/2 flex justify-center items-center px-4">
                        <img
                            src={ResumeImage}
                            alt={t('resumeImageAlt')}
                            className="w-80 md:w-96 h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
