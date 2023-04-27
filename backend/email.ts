const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
import { Request, Response } from 'express';
const app = express();
const port = 3001;

app.use(cors(), bodyParser.json());
app.post('/send', (req: Request, res: Response) => {
  const { to, from, subject, username, code } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jrui797@gmail.com',
      pass: 'pxpszpprivnnzteg'
    }
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    html: `<html>
      <head>
        <style type="text/css">
          body, p, div {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 14px;
          }
          a {
            text-decoration: none;
          }
        </style>
        <title></title>
      </head>
      <body>
      <center>
        <p>
          Segue abaixo seu codigo de verificação do UFAM JOBS, não compartilhe informações confidenciais com estranhos
        </p>
        <p>
          O código de verificação da conta de <strong>${username}</strong>
        </p>
        <p>
          Coloque o código abaixo no campo solicitado no site do UFAM JOBS
        </p>
        <p>
          <a href="#" 
             style="background-color:#ffbe00; color:#000000; display:inline-block; padding:12px 40px 12px 40px; text-align:center; text-decoration:none;" 
             target="_blank">${code}</a>
        </p>
        <p>
          
        </p>
        <p>
          <strong>Seja muito bem vindo!</strong>
        </p>
        <p><a href="https://sendgrid.com/blog/open-source-transactional-email-templates/">Check out more templates</a></p>
        <span style="font-size: 10px;"><a href=".">Email preferences</a></span>
      </center>
      </body>
    </html>`
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar email');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('Email enviado');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
