require('dotenv').config();
const twilio = require('twilio');

// This file is now primarily for local development.
// Vercel will use the functions in the /api directory.

// You can keep this code for local testing if you need to:
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

if (accountSid && authToken) { // Check if credentials are available
    const client = twilio(accountSid, authToken);

    // Example local test route (optional)
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();
    app.use(bodyParser.json());

    app.post('/test-whatsapp', async (req, res) => {
        try {
            const response = await client.messages.create({
                from: process.env.TWILIO_WHATSAPP_NUMBER,
                to: process.env.DESTINATION_WHATSAPP_NUMBER,
                body: "This is a test message from local server.js",
            });
            res.send(`Message sent successfully: ${response.sid}`);
        } catch (error) {
            console.error(error);
            res.status(500).send("Error sending message.");
        }
    });

    const port = process.env.PORT || 5001;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
} else {
    console.warn("Twilio credentials not found. Local testing routes will not be available.");
}