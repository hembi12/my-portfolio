import React from "react";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gradient-to-t from-gray-700 via-gray-900 to-black text-slate-100">
            <div className="container mx-auto px-4">
                <h2 className="text-slate-100 text-4xl sm:text-5xl font-bold text-center mb-8">
                    Habilidades
                </h2>
                <p className="text-center text-lg mb-12">
                    Estas son algunas de las tecnologías y herramientas con las que trabajo:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Habilidad 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML5"
                            className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">HTML5</h3>
                    </div>
                    {/* Habilidad 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            alt="CSS3"
                            className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">CSS3</h3>
                    </div>
                    {/* Habilidad 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">JavaScript</h3>
                    </div>
                    {/* Habilidad 4 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">React</h3>
                    </div>
                    {/* Habilidad 5 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            alt="TailwindCSS"
                            className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">TailwindCSS</h3>
                    </div>
                    {/* Habilidad 6 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Git</h3>
                    </div>
                    {/* Habilidad 7 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="w-16 h-16 filter invert transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">GitHub</h3>
                    </div>
                    {/* Habilidad 8 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Node.js</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
