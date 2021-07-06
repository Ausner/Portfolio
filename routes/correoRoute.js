const express = require('express');
const app = express();

let envio = require('../controller/correoController');

app.post('/send', envio.envioCorreo);


module.exports = app;