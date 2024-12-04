import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar el dropdown de Lenguaje (desktop)
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Estado para controlar el dropdown de Lenguaje (mobile)
    const [activeSection, setActiveSection] = useState("");
    const [language, setLanguage] = useState("Español"); // Estado para el idioma seleccionado

    // Función para manejar la detección de la sección activa
    const handleScroll = () => {
        const sections = ["hero", "about", "skills", "projects", "Resume", "contact"];
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop - 100; // Ajusta para que detecte un poco antes
                const offsetBottom = offsetTop + element.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Función para hacer scroll suave a una sección
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-zinc-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 text-white z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <div className="bg-gradient-to-b from-slate-500 via-slate-300 to-white bg-clip-text text-transparent text-2xl font-bold">
                    HM
                </div>
                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                        className={`hover:text-slate-300 ${
                            activeSection === "hero" ? "font-bold underline" : ""
                        }`}
                    >
                        Inicio
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                        className={`hover:text-slate-300 ${
                            activeSection === "about" ? "font-bold underline" : ""
                        }`}
                    >
                        Sobre mí
                    </a>
                    <a
                        href="#skills"
                        onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                        className={`hover:text-slate-300 ${
                            activeSection === "skills" ? "font-bold underline" : ""
                        }`}
                    >
                        Habilidades
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                        className={`hover:text-slate-300 ${
                            activeSection === "projects" ? "font-bold underline" : ""
                        }`}
                    >
                        Proyectos
                    </a>
                    <a
                        href="#Resume"
                        onClick={(e) => { e.preventDefault(); scrollToSection('Resume'); }}
                        className={`hover:text-slate-300 ${
                            activeSection === "Resume" ? "font-bold underline" : ""
                        }`}
                    >
                        Curriculum
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                        className={`hover:text-slate-300 ${
                            activeSection === "contact" ? "font-bold underline" : ""
                        }`}
                    >
                        Contacto
                    </a>
                    {/* Lenguaje Dropdown (Desktop) */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={`flex items-center hover:text-slate-300 ${
                                dropdownOpen ? "font-bold underline" : ""
                            }`}
                        >
                            Lenguaje
                            <FaChevronDown className="ml-2" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-slate-800 text-white rounded-lg shadow-lg md:w-40 w-auto">
                                <button
                                    onClick={() => {
                                        setLanguage("Español");
                                        setDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                        alt="Mexico"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Español
                                </button>
                                <button
                                    onClick={() => {
                                        setLanguage("Inglés");
                                        setDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                        alt="USA"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Inglés
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Links */}
            {isOpen && (
                <div className="md:hidden">
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollToSection('hero'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "hero" ? "font-bold underline" : ""
                        }`}
                    >
                        Inicio
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => { e.preventDefault(); scrollToSection('about'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "about" ? "font-bold underline" : ""
                        }`}
                    >
                        Sobre mí
                    </a>
                    <a
                        href="#skills"
                        onClick={(e) => { e.preventDefault(); scrollToSection('skills'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "skills" ? "font-bold underline" : ""
                        }`}
                    >
                        Habilidades
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "projects" ? "font-bold underline" : ""
                        }`}
                    >
                        Proyectos
                    </a>
                    <a
                        href="#Resume"
                        onClick={(e) => { e.preventDefault(); scrollToSection('Resume'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "Resume" ? "font-bold underline" : ""
                        }`}
                    >
                        Curriculum
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-slate-600 ${
                            activeSection === "contact" ? "font-bold underline" : ""
                        }`}
                    >
                        Contacto
                    </a>
                    {/* Lenguaje Dropdown (Mobile) */}
                    <div className="relative">
                        <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="block px-4 py-2 hover:bg-slate-600 flex items-center justify-between w-full"
                        >
                            Lenguaje
                            <FaChevronDown className="ml-2" />
                        </button>
                        {mobileDropdownOpen && (
                            <div className="text-white rounded-lg">
                                <button
                                    onClick={() => {
                                        setLanguage("Español");
                                        setMobileDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                        alt="Mexico"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Español
                                </button>
                                <button
                                    onClick={() => {
                                        setLanguage("Inglés");
                                        setMobileDropdownOpen(false);
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-slate-600 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                        alt="USA"
                                        className="w-5 h-5 mr-2"
                                    />
                                    Inglés
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
