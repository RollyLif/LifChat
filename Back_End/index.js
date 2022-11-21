const express = require('express');
const mongoose = require('mongoose');
const PersonRoute = require('./Routes/PersonRoutes');
const MessageRoute = require('./Routes/MessageRoutes');
const app = express();

require('dotenv').config();

const URL = process.env.URL;
const PORT = process.env.PORT || 2015;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect(URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/person', PersonRoute);
app.use('/private', MessageRoute);

const server=app.listen(PORT, ()=>console.log("http://localhost:"+PORT));
const io = require("socket.io")(server);
io.on('connection', socket =>{
  console.log('socket io')
})