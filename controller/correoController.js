const {request, response} = require('express');
const nodeMailer = require('nodemailer');

/*
const envioCorreo = (req = request, resp = response) => {
    let body = req.body;
    console.log(body.email);
    let msg = `Hola Ausner, soy tu asistente del portafolio, haz recibido un correo de ${body.email}\nMENSAJE:\n`+body.mensaje;
    console.log(msg)
}
*/

const envioCorreo = (req = request, resp = response) => {
    let body = req.body;

    let config  = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        auth:{
            user:'wportafolio@gmail.com',
            pass:'Hzbsq4YS19'
        }
    });

    const opciones = {
        from:'programacion',
        subject:'Contacto Portafolio',
        to:'ausnermiranda@gmail.com',
        text:`Hola Ausner, soy tu asistente del portafolio, haz recibido un correo de ${body.email}\nMENSAJE:\n`+body.mensaje
    }

    config.sendMail(opciones, function(error, result){

        if (error) return resp.json({ok:false, msg:error});

        return resp.json({
            ok:true,
            msg:result
        });
    })



}

module.exports = {
    envioCorreo
}