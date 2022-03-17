'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

//Rutas
const routes = require("./src/rutas/rutas");


const app = express();
const PUERTO = 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(routes);



app.listen(PUERTO, () => console.log(`servidor en puerto ${PUERTO}`));






