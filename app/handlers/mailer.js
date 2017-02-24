'use strict';

const NodeMailer = require('nodemailer');
const MailGen    = require('mailgen');
const bunyan     = require('bunyan');

/**
 * Mail transporter
 */
let transporter = NodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kdessi02@gmail.com',
        pass: 'ettasoeur'
    },
    tls: {
        rejectUnauthorized: false
    }
});

/**
 * Mail generator
 *
 * @type {Mailgen}
 */
let mailGenerator = new MailGen({
    theme: 'default',
    product: {
        name: 'Hapi Boilerplate',
        link: 'http://localhost:3000/'
    }
});

/**
 * Test the socket connection
 *
 * @param request
 * @param response
 */
module.exports.connection = (request, response) => {
    response(null, { msg : 'Welcome on hapi-boilerplate, your next step is on /documentation' });
};

/**
 * Mail sent to the user on creation
 *
 * @param request
 * @param response
 */
module.exports.sendUserCreate = (request, response) => {

    let email = {
        body: {
            name: request.url.query.login,
            intro: [
                'Welcome to Hapi Boilerplate!',
                'Here are your authentication data :',
                'Login : ' + request.url.query.login,
                'Password : ' + request.url.query.plainPassword
            ],
            action: {
                instructions: 'Here you can connect to Hapi Boilerplate : ',
                button: {
                    color: '#22BC66',
                    text: 'Connect',
                    link: 'http://localhost:3000/authent'
                }
            },
            outro: ''
        }
    };

    let emailBody = mailGenerator.generate(email);
    let emailText = mailGenerator.generatePlaintext(email);

    let mailOptions = {
        from: 'System <system@gmail.com>',
        to: request.url.query.email_address,
        subject: 'User created',
        text: emailText,
        html: emailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
        }
    });

    response(null, { msg : 'Mail sent !' });
};

/**
 * Mail sent to the user on update
 *
 * @param request
 * @param response
 */
module.exports.sendUserUpdate = (request, response) => {

    let email = {
        body: {
            name: 'User update',
            intro: 'Your data has changed.',
            action: {
                instructions: 'Here you can see it :',
                button: {
                    color: '#22BC66',
                    text: 'Display my data',
                    link: 'http://localhost:3000/user/' + request.url.query.id
                }
            },
            outro: ''
        }
    };

    let emailBody = mailGenerator.generate(email);
    let emailText = mailGenerator.generatePlaintext(email);

    let mailOptions = {
        from: 'System <system@gmail.com>',
        to: request.url.query.email_address,
        subject: 'User updated',
        text: emailText,
        html: emailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
        }
    });

    response(null, { msg : 'Mail sent !' });
};

/**
 * Mail sent to the user on password update
 *
 * @param request
 * @param response
 */
module.exports.sendUserUpdatePassword = (request, response) => {

    let email = {
        body: {
            name: 'User password update',
            intro: [
                'Your password has changed.',
                'Here you can try to connect with :',
                'Login : ' + request.url.query.login,
                'Password : ' + request.url.query.plainPassword
            ],
            action: {
                instructions: 'Here you can connect to Hapi Boilerplate : ',
                button: {
                    color: '#22BC66',
                    text: 'Connect',
                    link: 'http://localhost:3000/authent'
                }
            },
            outro: ''
        }
    };

    let emailBody = mailGenerator.generate(email);
    let emailText = mailGenerator.generatePlaintext(email);

    let mailOptions = {
        from: 'System <system@gmail.com>',
        to: request.url.query.email_address,
        subject: 'User password updated',
        text: emailText,
        html: emailBody
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
        }
    });

    response(null, { msg : 'Mail sent !' });
};
