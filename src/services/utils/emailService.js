require('dotenv').config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: process.env.TLS === 'false' ? false : true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    }
})

const emailService = {
    send: async (to, subject, html) => {
        try {
            const mail = await transporter.sendMail({
                from: 'Remetente "<meu-email@meu-email.com>',
                to,
                subject, // Subject line
                // text: "Exemplo de texto",
                html, // html body
            });

            console.log("Email enviado: %s", mail.messageId)
        }
        catch (e) {
            console.error(e)
            throw e
        }
    }
}

module.exports = emailService