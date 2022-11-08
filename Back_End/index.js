const express = require('express');
const mongoose = require('mongoose');
const PersonRoute = require('./Routes/PersonRoutes');
const MessageRoute = require('./Routes/MessageRoutes');
const app = express();
const PORT = 2015;

mongoose.connect('mongodb+srv://Rolly:LifeChat@cluster0.5kdlto6.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/person', PersonRoute);
app.use('/private', MessageRoute);

app.listen(PORT, ()=>console.log("http://localhost:"+PORT));