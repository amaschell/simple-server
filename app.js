"use strict";

const express = require('express');
const cors = require('cors');
const app = express();

const port = 3001;

app.use(cors());
app.use(express.static('public'));

var mysql  = require('./config/mysql.js');
require('./config/routes')(app);

app.listen(port, () => console.log('Server listening on port %s!', port));