require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 5001;

// Configuración de Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta para enviar WhatsApp
app.post('/send-whatsapp', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        // Enviar mensaje por WhatsApp usando Twilio
        const response = await client.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER, // Sandbox WhatsApp Number
            to: process.env.DESTINATION_WHATSAPP_NUMBER, // Número de destino verificado
            body: `Nuevo mensaje de contacto:\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
        });

        console.log('Mensaje enviado con éxito:', response.sid);
        res.status(200).json({ success: true, message: 'Mensaje enviado vía WhatsApp', sid: response.sid });
    } catch (error) {
        console.error('Error al enviar WhatsApp:', error.message);
        res.status(500).json({ success: false, message: 'Error al enviar WhatsApp', error: error.message });
    }
});

// Servidor escuchando
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
