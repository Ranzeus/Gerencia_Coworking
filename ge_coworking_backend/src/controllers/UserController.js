const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User");

module.exports = {
    //Listar Usuarios
    async index(req, res){
        const users = await User.find();

        return res.json(users);
    },

    // Pesquisar Usuario Especifico
    async show(req, res){
        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    //Criar um usuario
    async store(req, res){

        const {email, senha} = req.body;

        //Verificando se dados.js obrigatorios não foram informados
        if (!email || !senha){
            return res.status(400).send({error: 'Campo obrigatorio esta vazio'});
        }

        //Verifica se o email é válido
        const emailValido = validator.isEmail(email);

        if (!emailValido){
            return res.status(400).json({ message: "Falha! Email invalido!" })
        }

        //Verifica se a senha é válida
        const senhaValida = validator.isAlphanumeric(senha);

        if (!senhaValida || senha.length < 6){
            return res.status(400).json({ message: "Falha! Senha invalida!" })
        }

        //Verificando a existencia do usuario antes de criar um novo usuario
        const userExist = await User.findOne({'email': email});

        if (userExist){
            return res.status(400).send({error: 'Usuario/Email ja cadastrados'});
        }

        const user = await User.create(req.body);

        return res.json(user);

    },

    //Atualizar informação de um usuario
    async update(req,res){
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
        return res.json(user);
    },

    //Deletar usuario
    async destroy(req, res){
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    }

}