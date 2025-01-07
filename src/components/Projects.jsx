// Projects.jsx con Soporte para Modo Oscuro
import React from "react";
import { useTranslation } from 'react-i18next';
import Project1image from "../assets/images/Project1.png";
import Project2image from "../assets/images/Project2.png";
import Project3image from "../assets/images/Project3.png";


const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t('project1Title'),
            description: t('project1Description'),
            image: Project1image,
            technologies: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
            ],
            demoLink: "https://landing-page-woad-pi-82.vercel.app/",
            codeLink: "https://github.com/hembi12/landing-page",
        },
        {
            title: t('project2Title'),
            description: t('project2Description'),
            image: Project2image,
            technologies: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
            ],
            demoLink: "https://appointments-liard.vercel.app/",
            codeLink: "https://github.com/hembi12/appointments",
        },
        {
            title: t('project3Title'),
            description: t('project3Description'),
            image: Project3image,
            technologies: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            ],
            demoLink: "https://rsvp-cumple.web.app/",
            codeLink: "https://github.com/hembi12/cumplea-os_30",
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#8a4af3] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    {t('projects')}
                </h2>
                <p className="text-center text-lg mb-12">
                    {t('projectsDescription')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-xl flex flex-col overflow-hidden group transition-colors duration-500"
                        >
                            {/* Barra de la ventana estilo Mac */}
                            <div className="bg-gray-300 dark:bg-gray-700 flex items-center px-4 py-2">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                            </div>
                            {/* Contenedor de la imagen con botones */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-contain p-2 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 font-bold hover:bg-blue-500 text-white py-2 px-4 rounded-full mx-2 transition-colors duration-300"
                                    >
                                        {t('viewDemo')}
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 font-bold hover:bg-blue-500 text-white py-2 px-4 rounded-full mx-2 transition-colors duration-300"
                                    >
                                        {t('viewCode')}
                                    </a>
                                </div>
                            </div>
                            {/* Contenido del proyecto */}
                            <div className="p-4 flex flex-col">
                                <h3 className="text-black dark:text-white text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-white mb-4">
                                    {project.description}
                                </p>
                                {/* Logos de tecnologías */}
                                <div className="flex space-x-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <img
                                            key={techIndex}
                                            src={tech}
                                            alt={t('technologyLogo')}
                                            className={`w-7 h-7 transition-transform duration-500 ${tech.includes("nextjs") || tech.includes("vercel") ? "dark:filter dark:invert" : ""
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
