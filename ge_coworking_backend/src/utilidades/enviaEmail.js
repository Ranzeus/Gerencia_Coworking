require('dotenv').config();

const  nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'hotmail.com',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
});

let mailOptions = {
    from: 'zeusmuniz@hotmail.com',
    to: 'ranzeusmuniz@gmail.com',
    subject: 'Testando e Testando',
    html: `<h5> Click no <a href = "http://localhost:3000/user/:_id" >link</a> </h5>`
}

transporter.sendMail(mailOptions, function (err, data) {

    if (err){
        console.log('Deu Erro:', err);
    } else {
        console.log('Email enviado!!!!')
    }

})