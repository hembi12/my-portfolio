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
                    {/* Lenguajes */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML5"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">HTML5</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            alt="CSS3"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">CSS3</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">JavaScript</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            alt="TypeScript"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">TypeScript</h3>
                    </div>
                    {/* Frameworks y Librerías */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                            alt="Bootstrap"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Bootstrap</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            alt="TailwindCSS"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Tailwind CSS</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">React</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            alt="Next.js"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110 dark:filter dark:invert"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Next.js</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="Node.js"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Node.js</h3>
                    </div>
                    {/* Herramientas */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            alt="Git"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Git</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            alt="GitHub"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110 dark:filter dark:invert"
                        />
                        <h3 className="mt-4 text-lg font-semibold">GitHub</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                            alt="Visual Studio Code"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Visual Studio Code</h3>
                    </div>
                    {/* Backend y Servicios */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                            alt="Firebase"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Firebase</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg"
                            alt="Express"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110 dark:filter dark:invert"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Express</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg"
                            alt="Vercel"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110 dark:filter dark:invert"
                        />
                        <h3 className="mt-4 text-lg font-semibold">Vercel</h3>
                    </div>
                    {/* IA */}
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg"
                            alt="ChatGPT"
                            className="w-14 h-14 transition-transform duration-300 ease-in-out hover:scale-110 dark:filter dark:invert"
                        />
                        <h3 className="mt-4 text-lg font-semibold">ChatGPT</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;