import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
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
            newErrors.name = "El nombre es obligatorio.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El correo electrónico no es válido.";
        }
        if (!formData.subject) {
            newErrors.subject = "Debes seleccionar un asunto.";
        }
        if (!formData.message.trim()) {
            newErrors.message = "El mensaje no puede estar vacío.";
        }
        if (!formData.privacyConsent) {
            newErrors.privacyConsent = "Debes aceptar la Política de Privacidad.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = async (serviceId, templateId, variables) => {
        return emailjs.send(serviceId, templateId, variables, "p7oaquBSPoB6KaSr_");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                // Enviar correo al administrador
                await sendEmail("service_gziqjel", "template_5p4lqb8", {
                    from_name: formData.name,
                    reply_to: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    privacy_consent: formData.privacyConsent ? "Sí" : "No",
                });

                // Enviar correo al usuario
                await sendEmail("service_gziqjel", "template_7snt4z8", {
                    from_name: formData.name,
                    to_name: formData.name,
                    reply_to: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    privacy_consent: formData.privacyConsent ? "Sí" : "No",
                });

                // Mostrar modal de éxito
                setModal({
                    show: true,
                    type: "success",
                    message: "Formulario enviado correctamente. Hemos enviado una confirmación a tu correo.",
                });

                // Limpiar formulario
                setFormData({ name: "", email: "", subject: "", message: "", privacyConsent: false });
                setErrors({});
            } catch (error) {
                console.error("Error al enviar el formulario:", error);
                // Mostrar modal de error
                setModal({
                    show: true,
                    type: "error",
                    message: "Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.",
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <section
            id="contact"
            className="py-20 bg-[#f5f4f7] text-gray-600"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    Contáctame
                </h2>
                <p className="text-center text-lg mb-12">
                    Si tienes alguna pregunta o propuesta, no dudes en enviarme un mensaje a través del formulario de contacto.
                </p>
                <div className="max-w-2xl mx-auto">
                    {modal.show && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-gray-300 rounded-lg shadow-lg p-6 w-11/12 sm:w-96">
                                <h2
                                    className={`text-xl font-bold ${modal.type === "success" ? "text-green-500" : "text-red-500"}`}
                                >
                                    {modal.type === "success" ? "Éxito" : "Error"}
                                </h2>
                                <p className="text-slate-100 mt-4">{modal.message}</p>
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => setModal({ ...modal, show: false })}
                                        className="bg-slate-50 text-slate-900 px-4 py-2 rounded-full font-bold hover:bg-slate-300 transition duration-300"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Barra de la ventana estilo Mac */}
                    <div className="bg-gray-300 flex items-center px-4 py-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-200 p-8 rounded-b-lg shadow-xl"
                    >
                        {/* Nombre */}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-gray-600 text-lg font-semibold mb-2"
                            >
                                Nombre:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-[#f5f4f7] text-gray-600 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Escribe tu nombre"
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
                                className="block text-gray-600 text-lg font-semibold mb-2"
                            >
                                Correo Electrónico:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-[#f5f4f7] text-gray-600 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Escribe tu correo"
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
                                className="block text-gray-600 text-lg font-semibold mb-2"
                            >
                                Asunto:
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                className="w-full bg-[#f5f4f7] text-gray-600 border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.subject}
                                onChange={handleChange}
                            >
                                <option value="" disabled>
                                    Selecciona un asunto
                                </option>
                                <option value="consulta">Consulta</option>
                                <option value="propuesta">Propuesta</option>
                                <option value="otro">Otro</option>
                            </select>
                            {errors.subject && (
                                <p className="text-red-500 text-sm">{errors.subject}</p>
                            )}
                        </div>
                        {/* Mensaje */}
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-gray-600 text-lg font-semibold mb-2"
                            >
                                Mensaje:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full bg-[#f5f4f7] text-white border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Escribe tu mensaje..."
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
                                    className="mr-2 rounded"
                                    checked={formData.privacyConsent}
                                    onChange={handleChange}
                                />
                                <span className="text-gray-600 text-sm">
                                    Acepto la{" "}
                                    <a href="/privacy-policy" className="underline text-blue-500 hover:text-blue-600">
                                        Política de Privacidad
                                    </a>.
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
                                {loading ? "Enviando..." : "Enviar Mensaje"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
