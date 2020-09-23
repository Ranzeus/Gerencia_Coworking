//Imports
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Para enviar os dados em json
app.use(express.json());

//Liberar acesso de qualquer dominio
app.use(cors());

//Iniciando o BD
mongoose.connect(
    'mongodb://localhost:27017/cwapi',  // 104.131.72.37:3000
    { useUnifiedTopology: true, useNewUrlParser: true }
    );

//Acessando model
requireDir('./src/models');

//Rotas
app.use("/api",require("./src/routes"));

//Ouvindo porta 3001
app.listen(3001);