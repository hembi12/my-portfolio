import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                {/* Solo el título */}
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Política de Privacidad
                    </h1>
                </div>
                
                <div className="text-lg leading-relaxed space-y-6">
                    <p>
                        En <strong>mi página web</strong>, nos comprometemos a proteger tu privacidad. Este documento detalla cómo recopilamos, usamos y protegemos la información que compartes con nosotros.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
                        <p>
                            Podemos recopilar la siguiente información:
                        </p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Nombre completo</li>
                            <li>Correo electrónico</li>
                            <li>Asunto y contenido del mensaje enviado a través de nuestro formulario de contacto</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
                        <p>
                            Utilizamos tus datos únicamente para:
                        </p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Responder a tus consultas o mensajes enviados a través del formulario de contacto</li>
                            <li>Enviar notificaciones relacionadas con tu consulta</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">3. Protección de la Información</h2>
                        <p>
                            Implementamos medidas de seguridad para proteger tus datos. Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar la seguridad absoluta.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">4. Derechos del Usuario</h2>
                        <p>
                            Tienes derecho a:
                        </p>
                        <ul className="list-disc ml-6 mt-2 space-y-1">
                            <li>Acceder a los datos que recopilamos</li>
                            <li>Solicitar la corrección de datos incorrectos</li>
                            <li>Solicitar la eliminación de tus datos</li>
                        </ul>
                        <p className="mt-2">
                            Puedes ejercer estos derechos enviándonos un correo a: <strong>correo@ejemplo.com</strong>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">5. Cambios a Esta Política</h2>
                        <p>
                            Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio será publicado en esta página.
                        </p>
                    </div>

                    <p>
                        Si tienes dudas, contáctanos en <strong>correo@ejemplo.com</strong>.
                    </p>

                    {/* Botón centrado */}
                    <div className="text-center mt-6">
                        <Link to="/">
                            <button className="bg-slate-50 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-slate-300 transition duration-300">
                                Regresar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
