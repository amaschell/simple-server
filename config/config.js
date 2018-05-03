const env = process.env.NODE_ENV;

const development = {
    app: {
        port: 3001
    },
    db: {
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: '',
        name: 'SimpleServer'
    },
    mail: {
        transporterMail: '', // The transporter e-mail address that sends the mails.
        transporterPassword: '', // The password for that transporter.
        transporterService: '', // The service responsible for the defined transporter e-mail (e.g. 'gmail').
        receiverMail: '' // The e-mail address that should receive the contact form mails.
    }
};

// Define your custom configurations here and add them also below to the config object.
const test = {
    app: {
        port: 3001
    },
    db: {
        connectionLimit: 5,
        host: 'localhost',
        user: 'root',
        password: '',
        name: 'SimpleServer'
    },
    mail: {
        transporterMail: '', // The transporter e-mail address that sends the mails.
        transporterPassword: '', // The password for that transporter.
        transporterService: '', // The service responsible for the defined transporter e-mail (e.g. 'gmail').
        receiverMail: '' // The e-mail address that should receive the contact form mails.
    }
};

const config = {
    development,
    test
};

// Use one of the possible configs. If the server was started with an unknown mode,
// we will fall back to the development mode.
module.exports.getInstance = config[env] || development;