require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const headers = { 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
    'Content-Type' : 'application/x-www-form-urlencoded' 
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use( require('./routes/usuario') );


mongoose.connect( process.env.URLDB , (err, res) => {
      if ( err ) throw err;

      console.log("Conectado a base de datos.")
  });

app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto: ', process.env.PORT);  
})

