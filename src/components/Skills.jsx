import React from "react";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-20 bg-[#f5f4f7] text-gray-600"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    Habilidades
                </h2>
                <p className="text-center text-lg mb-12">
                    Estas son algunas de las tecnologías y herramientas con las que trabajo:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Habilidad 1: HTML5 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML5"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">HTML5</h3>
                    </div>
                    {/* Habilidad 2: CSS3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            alt="CSS3"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">CSS3</h3>
                    </div>
                    {/* Habilidad 3: JavaScript */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">JavaScript</h3>
                    </div>
                    {/* Habilidad 4: React */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">React</h3>
                    </div>
                    {/* Habilidad 5: Tailwind CSS */}
                    <div className="flex flex-col items-center">
                    <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            alt="TailwindCSS"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Tailwind CSS</h3>
                    </div>
                    {/* Habilidad 6: Git */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Git</h3>
                    </div>
                    {/* Habilidad 7: GitHub */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">GitHub</h3>
                    </div>
                    {/* Habilidad 8: Node.js */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Node.js</h3>
                    </div>
                    {/* Habilidad 9: Express.js */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            alt="Express.js"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Express.js</h3>
                    </div>
                    {/* Habilidad 10: MongoDB */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                            alt="MongoDB"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">MongoDB</h3>
                    </div>
                    {/* Habilidad 11: Python */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            alt="Python"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Python</h3>
                    </div>
                    {/* Habilidad 12: Django */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                            alt="Django"
                            className="w-14 h-14 filter invert transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Django</h3>
                    </div>
                    {/* Habilidad 13: MySQL */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                            alt="MySQL"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">MySQL</h3>
                    </div>
                    {/* Habilidad 14: PostgreSQL */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                            alt="PostgreSQL"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">PostgreSQL</h3>
                    </div>
                    {/* Habilidad 15: Redux */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                            alt="Redux"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Redux</h3>
                    </div>
                    {/* Habilidad 16: Next.js */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            alt="Next.js"
                            className="w-14 h-14 filter invert transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Next.js</h3>
                    </div>
                    {/* Habilidad 17: TypeScript */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            alt="TypeScript"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">TypeScript</h3>
                    </div>
                    {/* Habilidad 18: Sass */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                            alt="Sass"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Sass</h3>
                    </div>
                    {/* Habilidad 19: Webpack */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                            alt="Webpack"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Webpack</h3>
                    </div>
                    {/* Habilidad 20: Docker */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                            alt="Docker"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Docker</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
