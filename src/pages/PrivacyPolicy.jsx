import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
                    Política de Privacidad
                </h1>
                <div className="text-lg leading-relaxed">
                    <p className="mb-4">
                        En <strong>mi página web</strong>, nos comprometemos a proteger tu privacidad. Este documento detalla cómo recopilamos, usamos y protegemos la información que compartes con nosotros.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">1. Información que Recopilamos</h2>
                    <p className="mb-4">
                        Podemos recopilar la siguiente información:
                        <ul className="list-disc ml-6 mt-2">
                            <li>Nombre completo</li>
                            <li>Correo electrónico</li>
                            <li>Asunto y contenido del mensaje enviado a través de nuestro formulario de contacto</li>
                        </ul>
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">2. Uso de la Información</h2>
                    <p className="mb-4">
                        Utilizamos tus datos únicamente para:
                        <ul className="list-disc ml-6 mt-2">
                            <li>Responder a tus consultas o mensajes enviados a través del formulario de contacto</li>
                            <li>Enviar notificaciones relacionadas con tu consulta</li>
                        </ul>
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">3. Protección de la Información</h2>
                    <p className="mb-4">
                        Implementamos medidas de seguridad para proteger tus datos. Sin embargo, ningún sistema es completamente seguro, por lo que no podemos garantizar la seguridad absoluta.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">4. Derechos del Usuario</h2>
                    <p className="mb-4">
                        Tienes derecho a:
                        <ul className="list-disc ml-6 mt-2">
                            <li>Acceder a los datos que recopilamos</li>
                            <li>Solicitar la corrección de datos incorrectos</li>
                            <li>Solicitar la eliminación de tus datos</li>
                        </ul>
                        Puedes ejercer estos derechos enviándonos un correo a: <strong>correo@ejemplo.com</strong>.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">5. Cambios a Esta Política</h2>
                    <p className="mb-4">
                        Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier cambio será publicado en esta página.
                    </p>
                    <p className="mt-6">
                        Si tienes dudas, contáctanos en <strong>correo@ejemplo.com</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
