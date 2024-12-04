import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-8 bg-gradient-to-t from-gray-800 via-gray-900 to-black text-slate-100">
            <div className="container mx-auto px-4 text-center">
                {/* Derechos reservados */}
                <div className="text-sm text-slate-100">
                    © {new Date().getFullYear()} Héctor Martil. Todos los derechos reservados.
                </div>
                {/* Redes sociales */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a
                        href="https://github.com/hembi12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-50 hover:text-slate-300 transition duration-300"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hectormartil/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-50 hover:text-slate-300 transition duration-300"
                    >
                        <FaLinkedin size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
