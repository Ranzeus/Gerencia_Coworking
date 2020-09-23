const mongoose = require("mongoose");

const Workstation = mongoose.model("Workstation");

module.exports = {
    async index(req, res){
        const workstations = await Workstation.find();

        return res.json(workstations);
    },

    // Pesquisar workstation Especifico
    async show(req, res){
        const workstations = await Workstation.findById(req.params.id);

        return res.json(workstations);
    },

    //Criar um workstation
        async store(req, res){

            if (!req.body.nome){
                return res.status(400).send({error: 'Nome é um campo obrigatorio'});
            }
            if (!req.body.descricao){
                return res.status(400).send({error: 'Descrição é um campo obrigatorio'});
            }

            const workstation = await Workstation.create(req.body);

            return res.json(workstation);
        },

    //Atualizar informação de um Workstation
        async update(req,res){
            const workstation = await Workstation.findByIdAndUpdate(req.params.id, req.body,{new:true})
            return res.json(workstation);
        },

    //Deletar Workstation
        async destroy(req, res){
            await Workstation.findByIdAndRemove(req.params.id);
            return res.send();
        }
}