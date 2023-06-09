var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

  console.log(req.body)// estoy capturando datos??

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {

    to: 'faryd257@gmail.com',
    subject: 'contacto desde la web',
    html: nombre +  " " + apellido + "  se contactó a través y quiere mas info a este correo:"
      + email + ". <br> además, hizo el siguiente comentario:" + mensaje + ". <br> su telefono es" + telefono
  } // cierra var obj

  var transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }) // cierra transporter



 var info = await transporter.sendMail(obj);

  res.render('index', { message: 'mensaje enviado correctamente', });


});// cierra peticion del post

module.exports = router;
