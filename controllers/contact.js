'use strict';

const nodemailer = require('nodemailer');
const utils = require('../utils/mailUtils');
const config = require('../config/config');


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
            from: config.getInstance.mail.transporterMail,
            to: config.getInstance.mail.receiverMail,
            subject: 'SimpleBlog: Someone new contacted you!',
            html: utils.createContactFormMailContent(request)
        };

        // Configure the transport object for nodemailer.
        const transporter = nodemailer.createTransport({
            service: config.getInstance.mail.transporterService,
            auth: {
                user: config.getInstance.mail.transporterMail,
                pass: config.getInstance.mail.transporterPassword
            }
        });

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error(error);
                result.status(500).send(
                    {
                        type: 'exception',
                        message: 'Sending contact form mail failed due to an internal error of nodemailer!',
                        error: error
                    }
                );
            } else {
                // The mail has been sent.
                result.sendStatus(200);
            }
        });
    } catch (error) {
        // Handle and propagate possible validation errors here!
        console.error(error);
        result.status(500).send(
            {
                type: 'exception',
                message: 'The sending of the contact form mail failed due to an error!',
                error: error
            }
        );
    }
};