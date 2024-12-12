// Contact.jsx con Soporte para Modo Oscuro
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation, Trans } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacyConsent: false,
    });

    const [errors, setErrors] = useState({});
    const [modal, setModal] = useState({
        show: false,
        type: "", // "success" o "error"
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = t('validation.nameRequired');
        }
        if (!formData.email.trim()) {
            newErrors.email = t('validation.emailRequired');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('validation.emailInvalid');
        }
        if (!formData.subject) {
            newErrors.subject = t('validation.subjectRequired');
        }
        if (!formData.message.trim()) {
            newErrors.message = t('validation.messageRequired');
        }
        if (!formData.privacyConsent) {
            newErrors.privacyConsent = t('validation.privacyConsentRequired');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = async (serviceId, templateId, variables) => {
        return emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            templateId,
            variables,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                // 1. Enviar datos al servidor backend para enviar WhatsApp vía Twilio
                const whatsappResponse = await fetch('http://localhost:5001/send-whatsapp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message
                    }),
                });

                const whatsappResult = await whatsappResponse.json();
                if (!whatsappResult.success) {
                    throw new Error(whatsappResult.message);
                }

                // 2. Enviar correo al administrador
                await sendEmail(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ADMIN,
                    {
                        from_name: formData.name,
                        reply_to: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        privacy_consent: formData.privacyConsent ? "Sí" : "No",
                    }
                );

                // 3. Enviar correo al usuario
                await sendEmail(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_USER,
                    {
                        from_name: formData.name,
                        to_name: formData.name,
                        reply_to: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        privacy_consent: formData.privacyConsent ? "Sí" : "No",
                    }
                );

                // Mostrar modal de éxito
                setModal({
                    show: true,
                    type: "success",
                    message: t('contact.successMessage'),
                });

                // Limpiar formulario
                setFormData({ name: "", email: "", subject: "", message: "", privacyConsent: false });
                setErrors({});
            } catch (error) {
                console.error("Error al procesar el formulario:", error);
                // Mostrar modal de error
                setModal({
                    show: true,
                    type: "error",
                    message: t('contact.errorMessage'),
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <section
            id="contact"
            className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    {t('contact')}
                </h2>
                <p className="text-center text-lg mb-12">
                    {t('contactDescription')}
                </p>
                <div className="max-w-2xl mx-auto">
                    {modal.show && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className={`rounded-lg shadow-lg p-6 w-11/12 sm:w-96 ${modal.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
                                <h2 className={`text-xl font-bold ${modal.type === "success" ? "text-white" : "text-white"}`}>
                                    {modal.type === "success" ? t('contact.successTitle') : t('contact.errorTitle')}
                                </h2>
                                <p className="text-white mt-4">{modal.message}</p>
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => setModal({ ...modal, show: false })}
                                        className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-gray-200 transition duration-300"
                                    >
                                        {t('contact.closeButton')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Barra de la ventana estilo Mac */}
                    <div className="bg-gray-300 dark:bg-gray-600 flex items-center px-4 py-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-200 dark:bg-gray-700 p-8 rounded-b-lg shadow-xl transition-colors duration-500"
                    >
                        {/* Nombre */}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-black dark:text-white text-lg font-semibold mb-2"
                            >
                                {t('form.nameLabel')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-[#f5f4f7] dark:bg-gray-600 text-gray-600 dark:text-gray-200 border border-gray-400 dark:border-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={t('form.namePlaceholder')}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name}</p>
                            )}
                        </div>
                        {/* Correo Electrónico */}
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-black dark:text-white text-lg font-semibold mb-2"
                            >
                                {t('form.emailLabel')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-[#f5f4f7] dark:bg-gray-600 text-gray-600 dark:text-gray-200 border border-gray-400 dark:border-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={t('form.emailPlaceholder')}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>
                        {/* Asunto */}
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="block text-black dark:text-white text-lg font-semibold mb-2"
                            >
                                {t('form.subjectLabel')}
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full bg-[#f5f4f7] dark:bg-gray-600 text-gray-600 dark:text-gray-200 border border-gray-400 dark:border-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option value="" disabled>
                                    {t('form.subjectPlaceholder')}
                                </option>
                                <option value="consulta">{t('form.subjectOptions.consulta')}</option>
                                <option value="propuesta">{t('form.subjectOptions.propuesta')}</option>
                                <option value="otro">{t('form.subjectOptions.otro')}</option>
                            </select>
                            {errors.subject && (
                                <p className="text-red-500 text-sm">{errors.subject}</p>
                            )}
                        </div>
                        {/* Mensaje */}
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-black dark:text-white text-lg font-semibold mb-2"
                            >
                                {t('form.messageLabel')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full bg-[#f5f4f7] dark:bg-gray-600 text-gray-600 dark:text-gray-200 border border-gray-400 dark:border-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={t('form.messagePlaceholder')}
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            )}
                        </div>
                        {/* Casilla de Consentimiento */}
                        <div className="mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="privacyConsent"
                                    className="mr-2 rounded dark:bg-gray-600 dark:border-gray-500"
                                    checked={formData.privacyConsent}
                                    onChange={handleChange}
                                />
                                <span className="text-black dark:text-white text-sm">
                                    <Trans
                                        i18nKey="checkboxLabel"
                                        components={{
                                            1: <a href="/privacy-policy" className="underline text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500" />
                                        }}
                                    />
                                </span>
                            </label>
                            {errors.privacyConsent && (
                                <p className="text-red-500 text-sm">{errors.privacyConsent}</p>
                            )}
                        </div>
                        {/* Botón Enviar Mensaje */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-500 transition duration-300"
                                disabled={loading}
                            >
                                {loading ? t('form.sending') : t('form.sendMessage')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
