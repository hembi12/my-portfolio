require('dotenv').config(); // Load environment variables from .env (for local testing)
const twilio = require('twilio');

exports.handler = async (req, res) => {
    // Check if it's a POST request
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' }); // Only allow POST
    }

    // Get data from the request body
    const { name, email, subject, message } = req.body;

    // Check if required fields are present
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Initialize Twilio client INSIDE the handler (important for Vercel)
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;

        if (!accountSid || !authToken) {
            console.error('Twilio credentials are missing. Check environment variables.');
            return res.status(500).json({ error: 'Twilio configuration error' });
        }

        const client = twilio(accountSid, authToken);

        const response = await client.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: process.env.DESTINATION_WHATSAPP_NUMBER,
            body: `Nuevo mensaje de contacto:\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
        });

        console.log('WhatsApp message sent successfully:', response.sid);
        return res.status(200).json({ success: true, message: 'Message sent via WhatsApp', sid: response.sid });

    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        return res.status(500).json({ success: false, message: 'Error sending WhatsApp', error: error.message });
    }
};