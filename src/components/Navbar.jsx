// Navbar.jsx con Modo Oscuro, Botón de Toggle al lado de "HM" y Menú Móvil Visible en < 1024px

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaMoon, FaSun } from "react-icons/fa"; // Importa iconos para el toggle
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isPrivacyPolicy = location.pathname === "/privacy-policy";

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    const [notification, setNotification] = useState(null); // Estado para notificaciones

    const [isDarkMode, setIsDarkMode] = useState(false); // Estado para modo oscuro

    const navbarRef = useRef(null);

    // Cargar preferencia de modo oscuro al montar el componente
    useEffect(() => {
        const darkModePreference = localStorage.getItem('theme') === 'dark';
        setIsDarkMode(darkModePreference);
        if (darkModePreference) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Actualizar la clase del documento cuando cambia el estado de modo oscuro
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isPrivacyPolicy) return;
        const handleScroll = () => {
            const sections = ["hero", "about", "skills", "projects", "Resume", "contact"];
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 100;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isPrivacyPolicy]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
                setDropdownOpen(false);
                setMobileDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    // Función para cambiar el idioma
    const changeLanguage = (lng) => {
        if (i18n.language === lng) {
            // Si el idioma ya está seleccionado, mostrar notificación
            setNotification(t('languageAlreadySelected'));
            // Ocultar notificación después de 3 segundos
            setTimeout(() => setNotification(null), 3000);
        } else {
            i18n.changeLanguage(lng);
        }
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
    };

    return (
        <nav
            ref={navbarRef}
            className={`fixed top-0 left-0 w-full 
                bg-gray-100 dark:bg-gray-800 
                bg-clip-padding backdrop-filter backdrop-blur 
                ${scrolled ? 'bg-opacity-10 dark:bg-opacity-10' : 'bg-opacity-50 dark:bg-opacity-50'} 
                backdrop-saturate-100 backdrop-contrast-100 
                text-black dark:text-white 
                z-50 transition-opacity duration-300`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                {/* Contenedor para "HM" y el botón de modo oscuro */}
                <div className="flex items-center">
                    <div className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-2xl font-bold">
                        HM
                    </div>
                    {/* Botón para alternar modo oscuro */}
                    <button
                        onClick={toggleDarkMode}
                        className="ml-4 flex items-center text-gray-400 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 focus:outline-none"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
                    </button>
                </div>

                {isPrivacyPolicy ? (
                    <>
                        <div className="hidden lg:flex space-x-6 items-center">
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={`flex items-center hover:text-blue-500 ${
                                        dropdownOpen ? "text-blue-500 font-bold underline" : ""
                                    }`}
                                >
                                    {t('language')}
                                    <FaChevronDown className="ml-2" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute left-0 mt-2 text-black dark:text-white rounded-lg shadow-lg lg:w-40 w-auto">
                                        <button
                                            onClick={() => changeLanguage('es')}
                                            className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                                alt="Mexico"
                                                className="w-5 h-5 mr-2"
                                            />
                                            {t('spanish')}
                                        </button>
                                        <button
                                            onClick={() => changeLanguage('en')}
                                            className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                                alt="USA"
                                                className="w-5 h-5 mr-2"
                                            />
                                            {t('english')}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="lg:hidden flex items-center">
                            {/* Botón de menú móvil */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none mr-2"
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
                            {/* Nota: El botón de modo oscuro ha sido eliminado de esta sección */}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="hidden lg:flex space-x-6 items-center">
                            <a
                                href="#hero"
                                onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
                                className={`hover:text-blue-500 ${
                                    activeSection === "hero" ? "text-blue-500 font-bold underline" : ""
                                }`}
                            >
                                {t('home')}
                            </a>
                            <a
                                href="#about"
                                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                                className={`hover:text-blue-500 ${
                                    activeSection === "about" ? "text-blue-500 font-bold underline" : ""
                                }`}
                            >
                                {t('about')}
                            </a>
                            <a
                                href="#skills"
                                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                                className={`hover:text-blue-500 ${
                                    activeSection === "skills" ? "text-blue-500 font-bold underline" : ""
                                }`}
                            >
                                {t('skills')}
                            </a>
                            <a
                                href="#projects"
                                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                                className={`hover:text-blue-500 ${
                                    activeSection === "projects" ? "text-blue-500 font-bold underline" : ""
                                }`}
                            >
                                {t('projects')}
                            </a>
                            <a
                                href="#Resume"
                                onClick={(e) => { e.preventDefault(); scrollToSection('Resume'); }}
                                className={`hover:text-blue-500 ${
                                    activeSection === "Resume" ? "text-blue-500 font-bold underline" : ""
                                }`}
                            >
                                {t('resume')}
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                                className={`hover:text-blue-500 ${
                                    activeSection === "contact" ? "text-blue-500 font-bold underline" : ""
                                }`}
                            >
                                {t('contact')}
                            </a>
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className={`flex items-center hover:text-blue-500 ${
                                        dropdownOpen ? "text-blue-500 font-bold underline" : ""
                                    }`}
                                >
                                    {t('language')}
                                    <FaChevronDown className="ml-2" />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute left-0 mt-2 text-black dark:text-white rounded-lg shadow-lg lg:w-40 w-auto">
                                        <button
                                            onClick={() => changeLanguage('es')}
                                            className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                                alt="Mexico"
                                                className="w-5 h-5 mr-2"
                                            />
                                            {t('spanish')}
                                        </button>
                                        <button
                                            onClick={() => changeLanguage('en')}
                                            className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                        >
                                            <img
                                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                                alt="USA"
                                                className="w-5 h-5 mr-2"
                                            />
                                            {t('english')}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="lg:hidden flex items-center">
                            {/* Botón de menú móvil */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none mr-2"
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
                            {/* Nota: El botón de modo oscuro ha sido eliminado de esta sección */}
                        </div>
                    </>
                )}
            </div>

            {/* Notificación si el idioma ya está seleccionado */}
            {notification && (
                <div className="absolute top-16 w-full flex justify-center z-50">
                    <div className="bg-red-500 dark:bg-red-700 text-white font-bold px-4 py-2 rounded-md shadow-xl">
                        {notification}
                    </div>
                </div>
            )}

            {isPrivacyPolicy && isOpen && (
                <div className="lg:hidden">
                    <div className="relative">
                        <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 flex items-center justify-between w-full"
                        >
                            {t('language')}
                            <FaChevronDown className="ml-2" />
                        </button>
                        {mobileDropdownOpen && (
                            <div className="text-gray-600 dark:text-gray-300 rounded-lg shadow-lg">
                                <button
                                    onClick={() => changeLanguage('es')}
                                    className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                        alt="Mexico"
                                        className="w-5 h-5 mr-2"
                                    />
                                    {t('spanish')}
                                </button>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                        alt="USA"
                                        className="w-5 h-5 mr-2"
                                    />
                                    {t('english')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!isPrivacyPolicy && isOpen && (
                <div className="lg:hidden">
                    <a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollToSection('hero'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 ${
                            activeSection === "hero" ? "text-blue-500 font-bold underline" : ""
                        }`}
                    >
                        {t('home')}
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => { e.preventDefault(); scrollToSection('about'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 ${
                            activeSection === "about" ? "text-blue-500 font-bold underline" : ""
                        }`}
                    >
                        {t('about')}
                    </a>
                    <a
                        href="#skills"
                        onClick={(e) => { e.preventDefault(); scrollToSection('skills'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 ${
                            activeSection === "skills" ? "text-blue-500 font-bold underline" : ""
                        }`}
                    >
                        {t('skills')}
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 ${
                            activeSection === "projects" ? "text-blue-500 font-bold underline" : ""
                        }`}
                    >
                        {t('projects')}
                    </a>
                    <a
                        href="#Resume"
                        onClick={(e) => { e.preventDefault(); scrollToSection('Resume'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 ${
                            activeSection === "Resume" ? "text-blue-500 font-bold underline" : ""
                        }`}
                    >
                        {t('resume')}
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsOpen(false); }}
                        className={`block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 ${
                            activeSection === "contact" ? "text-blue-500 font-bold underline" : ""
                        }`}
                    >
                        {t('contact')}
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 flex items-center justify-between w-full"
                        >
                            {t('language')}
                            <FaChevronDown className="ml-2" />
                        </button>
                        {mobileDropdownOpen && (
                            <div className="text-gray-600 dark:text-gray-300 rounded-lg shadow-lg">
                                <button
                                    onClick={() => changeLanguage('es')}
                                    className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/mx.svg"
                                        alt="Mexico"
                                        className="w-5 h-5 mr-2"
                                    />
                                    {t('spanish')}
                                </button>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className="flex items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 hover:font-bold hover:text-blue-500 dark:hover:text-blue-400 text-left w-full"
                                >
                                    <img
                                        src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg"
                                        alt="USA"
                                        className="w-5 h-5 mr-2"
                                    />
                                    {t('english')}
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
