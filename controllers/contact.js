'use strict';

const nodemailer = require('nodemailer');
const utils = require('../utils/mailUtils');
const mailConfig = require('../config/mails');


/**
 * Tries to send a contact form message to a specified receiver by using a specified transporter and by validating
 * all request parameters. If the validation failed, an HTTP 500 code and the validation errors are sent to the client.
 * If the validation succeeded and the mail was properly sent to the receiver, an HTTP 200 code is sent to the client.
 *
 * @param request The incoming request object.
 * @param result The outgoing response object.
 * @returns {Promise<void>} The promise returned from the asynchronous function.
 */
module.exports.sendContactFormMail = async function(request, result) {
    try {
        // Validate the request body first!
        await utils.validContactFormMailContent(request);

        // Create the mail configuration including the mail's generated HTML content.
        const mailOptions = {
            from: mailConfig.TRANSPORTER_MAIL,
            to: mailConfig.RECEIVER_MAIL,
            subject: 'SimpleBlog: Someone new contacted you!',
            html: utils.createContactFormMailContent(request)
        };

        // Configure the transport object for nodemailer.
        const transporter = nodemailer.createTransport({
            service: mailConfig.TRANSPORTER_SERVICE,
            auth: {
                user: mailConfig.TRANSPORTER_MAIL,
                pass: mailConfig.TRANSPORTER_PASSWORD
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
                // The mail has been sent.
                result.sendStatus(200);
            }
        });
    } catch (error) {
        // Handle and propagate possible validation errors here!
        console.log(error);
        result.status(500).send(error);
    }
};