'use strict';

const nodemailer = require('nodemailer');
const utils = require('../utils/mailUtils');
const mailConfig = require('../config/mails');


module.exports.sendContactFormMail = async function(request, result) {
    try {
        await utils.validContactFormMailContent(request);

        const mailOptions = {
            from: mailConfig.transportMail,
            to: mailConfig.receiverMail,
            subject: 'SimpleBlog: Someone new contacted you!',
            html: utils.createContactFormMailContent(request)
        };

        const transporter = nodemailer.createTransport({
            service: mailConfig.transportService,
            auth: {
                user: mailConfig.transportMail,
                pass: mailConfig.transportPassword
            }
        });

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                result.status(500).send(
                    'Mail could not get sent due to an internal server error! ' +
                    'Please contact the server administrator.'
                );
            } else {
                result.sendStatus(200);
            }
        });
    } catch (error) {
        console.log(error);
        result.status(500).send(error);
    }
};