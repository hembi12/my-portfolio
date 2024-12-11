import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Define los recursos de traducción
const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

// Inicializa i18next
i18n
    .use(initReactI18next) // Pasa i18n a react-i18next
    .init({
        resources,
        lng: 'es', // Idioma por defecto
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React ya escapa los valores
        },
        detection: {
            // Opcional: Detectar el idioma del navegador
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
