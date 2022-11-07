const express = require('express');
const mongoose = require('mongoose');
const Person = require('./Models/Person');
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

app.post('/user', (req, res, next) =>{
    delete req.body._id;
    const person = new Person({
        name : req.body.name,
        password : req.body.password
    })
    person.save()
    .then(()=> res.status(201).json({message :'Objet enregistre'}))
    .catch(error => res.status(400).json({error}))
})

app.get('/user', (req, res, next) => {
    Person.find()
    .then(persons => res.status(200).json(persons))
    .catch(error => res.status(400).json({error}))
  });

app.listen(PORT, ()=>console.log("http://localhost:"+PORT));