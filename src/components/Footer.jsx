// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-8 bg-[#f5f4f7] text-gray-600">
            <div className="container mx-auto px-4 text-center">
                {/* Derechos reservados */}
                <div className="text-sm text-gray-600">
                    {t('rightsReserved', { year: new Date().getFullYear() })}
                </div>
                {/* Redes sociales */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a
                        href="https://github.com/hembi12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-500 transition duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hectormartil/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-500 transition duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
