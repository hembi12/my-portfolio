import twilio from 'twilio'; // Importa twilio

export default async function handler(req, res) { // Exportación por defecto OBLIGATORIA
    if (req.method === 'POST') { // Verifica que sea una petición POST
        try {
            const accountSid = process.env.TWILIO_ACCOUNT_SID;
            const authToken = process.env.TWILIO_AUTH_TOKEN;
            const client = twilio(accountSid, authToken);

            const { name, email, subject, message } = req.body;

            const response = await client.messages.create({
                from: process.env.TWILIO_WHATSAPP_NUMBER,
                to: process.env.DESTINATION_WHATSAPP_NUMBER,
                body: `Nuevo mensaje de contacto:\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
            });

            console.log("Mensaje de WhatsApp enviado:", response.sid);
            return res.status(200).json({ success: true, message: 'Mensaje enviado correctamente' }); // Respuesta JSON
        } catch (error) {
            console.error('Error al enviar mensaje de WhatsApp:', error);
            return res.status(500).json({ success: false, message: 'Error al enviar WhatsApp', error: error.message }); // Respuesta JSON en caso de error
        }
    } else {
        return res.status(405).json({ message: 'Método no permitido. Solo se aceptan peticiones POST' }); // Manejo de otros métodos HTTP
    }
}