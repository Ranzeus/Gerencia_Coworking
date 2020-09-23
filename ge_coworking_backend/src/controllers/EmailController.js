const mongoose = require("mongoose");
const  nodemailer = require("nodemailer");

function enviaEmail(req,res) {
    const {id,email} = req.body;

    let transporter = nodemailer.createTransport({
        service: 'hotmail.com',
        auth: {
            user: 'zeusmuniz@hotmail.com',
            pass: 'rnom12'
        }
    });

    let mailOptions = {
        from: 'zeusmuniz@hotmail.com',
        to: email,
        subject: 'Email de Confirmação',
        html: `<h5> Click no <a href = "http://localhost:3000/attDadosUsuario/${id}" >link</a> </h5>`
    }

    transporter.sendMail(mailOptions, function (err, data) {

        if (err){
            console.log('Deu Erro:', err);
            res.status(500).send('ERRO!')
        } else {
            console.log('Email enviado!!!!')
            res.status(200).send(id)
        }

    })

}

module.exports = {
    enviaEmail

}