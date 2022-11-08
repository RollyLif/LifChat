const express = require('express');
const route = express.Router();
const Person = require("../Models/Person");

route.post('/', (req, res, next) =>{
    delete req.body._id;
    const person = new Person({
        ...req.body
    })
    person.save()
    .then(()=> res.status(201).json({message :'Objet enregistre'}))
    .catch(error => res.status(400).json({error}))
})

route.get('/:id', (req, res, next) =>{
  Person.findOne({_id: req.params.id})
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(400).json({error}))
})

route.get('/all', (req, res, next) => {
    Person.find()
    .then(persons => res.status(200).json(persons))
    .catch(error => res.status(400).json({error}))
});

module.exports = route;