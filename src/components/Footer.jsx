import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-8 bg-[#f5f4f7] text-gray-600">
            <div className="container mx-auto px-4 text-center">
                {/* Derechos reservados */}
                <div className="text-sm text-gray-600">
                    © {new Date().getFullYear()} Héctor Martil. Todos los derechos reservados.
                </div>
                {/* Redes sociales */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a
                        href="https://github.com/hembi12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 transition duration-300"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hectormartil/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700 transition duration-300"
                    >
                        <FaLinkedin size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
