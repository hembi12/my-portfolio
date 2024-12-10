import React from "react";
import ResumeImage from "../assets/images/Resume.svg";

const Resume = () => {
    return (
        <section
            id="Resume"
            className="py-20 bg-[#f5f4f7] text-white"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    Curriculum
                </h2>
                {/* Contenido principal */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Lado izquierdo: Texto y opciones */}
                    <div className="md:w-1/2 text-gray-600 text-center md:text-left flex flex-col justify-center px-4">
                        <p className="text-lg leading-relaxed mb-6">
                            En esta sección, puedes visualizar mi currículum o descargarlo
                            en formato PDF. Este documento detalla mi experiencia profesional,
                            habilidades, educación y más.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                            <a
                                href="/path/to/visualize-cv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-600 transition duration-300"
                            >
                                Ver Curriculum
                            </a>
                            <a
                                href="/path/to/download-cv.pdf"
                                download
                                className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition duration-300"
                            >
                                Descargar
                            </a>
                        </div>
                    </div>
                    {/* Lado derecho: Imagen */}
                    <div className="md:w-1/2 flex justify-center items-center px-4">
                        <img
                            src={ResumeImage}
                            alt="Curriculum"
                            className="w-80 md:w-96 h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
