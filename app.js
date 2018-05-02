'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = require('./config/database.js');
require('./config/routes')(app);

app.listen(port, () => console.log('Server listening on port %s!', port));

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