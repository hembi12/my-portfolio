import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce",
            description:
                "Plataforma de comercio electrónico con carrito de compras y sistema de pago integrado.",
            image: "https://via.placeholder.com/300",
            technologies: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            ],
            demoLink: "#",
            codeLink: "#",
        },
        {
            title: "Portfolio",
            description:
                "Sitio web personal diseñado para mostrar mis proyectos y habilidades.",
            image: "https://via.placeholder.com/300",
            technologies: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            ],
            demoLink: "#",
            codeLink: "#",
        },
        {
            title: "Blog",
            description:
                "Aplicación de blog con autenticación de usuarios y sistema de comentarios.",
            image: "https://via.placeholder.com/300",
            technologies: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            ],
            demoLink: "#",
            codeLink: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 bg-gradient-to-b from-gray-700 via-gray-900 to-black text-slate-100"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-slate-100 text-4xl sm:text-5xl font-bold text-center mb-8">
                    Proyectos
                </h2>
                <p className="text-center text-lg mb-12">
                    Aquí puedes explorar algunos de mis proyectos destacados:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-600 rounded-lg shadow-lg flex flex-col overflow-hidden group"
                        >
                            {/* Barra de la ventana estilo Mac */}
                            <div className="bg-slate-700 flex items-center px-4 py-2">
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
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-slate-50 font-bold hover:bg-slate-300 text-gray-900 py-2 px-4 rounded-full mx-2 transition duration-300"
                                    >
                                        Ver Demo
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="border border-slate-50 font-bold hover:bg-slate-50 hover:text-gray-900 text-slate-50 py-2 px-4 rounded-full mx-2 transition duration-300"
                                    >
                                        Ver Código
                                    </a>
                                </div>
                            </div>
                            {/* Contenido del proyecto */}
                            <div className="p-4 flex flex-col">
                                <h3 className="text-slate-100 text-2xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 mb-4">
                                    {project.description}
                                </p>
                                {/* Logos de tecnologías */}
                                <div className="flex space-x-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <img
                                            key={techIndex}
                                            src={tech}
                                            alt="Technology logo"
                                            className="w-7 h-7"
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
