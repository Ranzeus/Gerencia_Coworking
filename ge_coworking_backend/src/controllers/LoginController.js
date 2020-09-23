const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User");


module.exports = {
    async store(req, res){

        //Verifica se as informações necessarias foram passadas
        if (!req.body.email) {
            return res.status(400).json({ message: "Falha! Informe o e-mail!" })
        }

        if (!req.body.senha) {
            return res.status(400).json({ message: "Falha! Informe a senha!" })
        }

        //Verifica a existencia do usuario
        const novoEmail = req.body.email;
        const userExist = await User.findOne({'email': novoEmail});
        if (!userExist){
            return res.status(404).json({error: 'Usuario não cadastrados'});
        }

        //Verifica a igualdade entre senha fornecida e Senha cadastrada no BD
        if (req.body.senha === userExist.senha){
            const userResponse = {
                _id: userExist._id,
                name: userExist.name,
                email: userExist.email,
                data: userExist.data,
                endPessoal: userExist.endPessoal
                // isAdmin: user.isAdmin,
                // isValidate: user.isValidate
            }
            return res.json(userResponse)
        }else {
            return res.status(400).json({ message: "Senha incorreta!" })
        }

    }


}