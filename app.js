'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// What the server should use.
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const config = require('./config/config');
const db = require('./database/database.js');
require('./config/routes')(app);

// Start the server.
app.listen(config.getInstance.app.port, () => console.log('Server listening on port %s!', config.getInstance.app.port));

// Close the database connection on shutdown and exit gracefully!
process.on('SIGINT', async function () {
    try {
        await db.getInstance.close();

        console.log('Server has been shut down successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Server has been shut down with an error:');
        console.error(error);

        process.exit(1);
    }
});