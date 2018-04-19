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

require('./config/database.js');
require('./config/routes')(app);

app.listen(port, () => console.log('Server listening on port %s!', port));


// TODO: How to exit gracefully the server and do clean up operations (database etc.)?
// TODO: Special logger needed?