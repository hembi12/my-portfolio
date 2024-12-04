import React from "react";
import ResumeImage from "../assets/images/Resume.svg";

const Resume = () => {
    return (
        <section id="Resume" className="py-20 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-slate-100 text-4xl sm:text-5xl font-bold text-center mb-8">
                    Curriculum
                </h2>
                {/* Contenido principal */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Lado izquierdo: Texto y opciones */}
                    <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center px-4">
                        <p className="text-lg leading-relaxed mb-6">
                            En esta sección, puedes visualizar mi curriculum o descargarlo
                            en formato PDF. Este documento detalla mi experiencia profesional,
                            habilidades, educación y más.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="/path/to/visualize-cv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-50 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-slate-300 transition duration-300"
                            >
                                Ver Curriculum
                            </a>
                            <a
                                href="/path/to/download-cv.pdf"
                                download
                                className="border border-slate-50 text-slate-50 px-6 py-2 rounded-full font-bold hover:bg-slate-50 hover:text-gray-900 transition duration-300"
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
