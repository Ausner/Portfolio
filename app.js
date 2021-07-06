const express = require('express');
const app = express();
let cors = require('cors');
const bodyparser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.use(express.static('public'))

app.use(require('./routes/correoRoute'));

app.listen(port,  ()=> {
    console.log('Escuchando en el puerto', port);
})