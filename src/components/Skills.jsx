// Skills.jsx con Soporte para Modo Oscuro
import React from "react";
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section
            id="skills"
            className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#8a4af3] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    {t('skills')}
                </h2>
                <p className="text-center text-lg mb-12">
                    {t('skillsDescription')}
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
                    {/* Habilidad 4: Bootstrap */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                            alt="Bootstrap"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Bootstrap</h3>
                    </div>
                    {/* Habilidad 5: React */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">React</h3>
                    </div>
                    {/* Habilidad 6: Tailwind CSS */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            alt="TailwindCSS"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Tailwind CSS</h3>
                    </div>
                    {/* Habilidad 7: Node.js */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Node.js</h3>
                    </div>
                    {/* Habilidad 8: Firebase */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                            alt="Firebase"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Firebase</h3>
                    </div>
                    {/* Habilidad 9: ChatGPT */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg"
                            alt="ChatGPT"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110 dark:filter dark:invert"
                        />
                        <h3 className="mt-4 text-lg font-semibold">ChatGPT</h3>
                    </div>
                    {/* Habilidad 10: Git */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Git</h3>
                    </div>
                    {/* Habilidad 11: GitHub */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110 dark:filter dark:invert"
                        />
                        <h3 className="mt-4 text-lg font-semibold">GitHub</h3>
                    </div>
                    {/* Habilidad 12: Visual Studio Code */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                            alt="Visual Studio Code"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Visual Studio Code</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
