const mongoose = require("mongoose");

const SalaReuniao = mongoose.model("SalaReuniao");

module.exports = {
    //Listar as Salas de Reunião
    async index(req, res){
        const salasReuniao = await SalaReuniao.find();

        return res.json(salasReuniao);
    },

    // Pesquisar Sala de Reunião Especifica
    async show(req, res){
        const salaReuniao = await SalaReuniao.findById(req.params.id);

        return res.json(salaReuniao);
    },

    //Criar uma Sala de Reunião
    async store(req, res){
        if (!req.body.nome){
            return res.status(400).send({error: 'Nome é um campo obrigatorio'});
        }
        if (!req.body.descricao){
            return res.status(400).send({error: 'Descricao é um campo obrigatorio'});
        }
        const salaReuniao = await SalaReuniao.create(req.body);

        return res.json(salaReuniao);
    },

    //Atualizar informação de uma Sala de Reunião
    async update(req,res){
        const salaReuniao = await SalaReuniao.findByIdAndUpdate(req.params.id, req.body,{new:true})
        return res.json(salaReuniao);
    },

    //Deletar Sala de Reunião
    async destroy(req, res){
        await SalaReuniao.findByIdAndRemove(req.params.id);
        return res.send();
    }
}