"use strict";

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));

require('./config/routes')(app);

app.listen(3001, () => console.log('Server listening on port 3001!'));