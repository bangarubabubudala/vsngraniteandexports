// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/send-feedback', (req, res) => {
    const { email, feedback } = req.body;

    // Replace with your email and SMTP server details
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bangarubabubudala@gmail.com',
            pass: 'Musalamma@123',
        },
    });

    const mailOptions = {
        from: email,
        to: 'bangarubabubudala@gmail.com',
        subject: 'Feedback Received',
        text: `Email: ${email}\nFeedback: ${feedback}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Feedback sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
