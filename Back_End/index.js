const express = require('express');
const app = express();
const PORT = 2015;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        name: 'Rolly Lifungula',
        Password: 'meconnecter',
      },
      {
        _id: 'oeihfzeomoihi',
        id_sender: 'oeihfzeoi',
        id_receiver: 'oeihfzeog',
        message : 'Mon premier message de chat Lif'
      },
    ];
    res.status(200).json(stuff);
  });

app.listen(PORT, ()=>console.log("http://localhost:"+PORT));