const mongoose = require('mongoose');

const SalaReuniaoSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    descricao:{
        type: String
    },
    agendamentos:{
        type: String,
        require: true
    }
});

mongoose.model("SalaReuniao", SalaReuniaoSchema);