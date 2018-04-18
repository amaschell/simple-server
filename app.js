'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = 3001;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./config/database.js');
require('./config/routes')(app);

app.listen(port, () => console.log('Server listening on port %s!', port));

// TODO: What to do on shutdown? Clean up!