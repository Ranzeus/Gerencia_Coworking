const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        default: "nome",
        require: true,
    },
    data:{
        type: String,
        default: "data",
        require: true,
    },
    cpf:{
        type: Number,
        default: 0,
        require: true,
    },
    endPessoal:{
        type: String,
        default: "endereco",
        require: true,
    },
    biografia:{
        type: String,
        default: "Biografia",
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    senha:{
        type: String,
        require: true,
    },
    adm:{
        default: false,
        type: Boolean,
    }
});

mongoose.model("User", UserSchema);