const Person = require('../Models/Person');
const bcrypt = require('bcrypt');

exports.createPerson = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            delete req.body._id;
            const person = new Person({
            name : req.body.name,
            password : hash,
            email : req.body.email  
            });
            person.save()
            .then(()=> res.status(201).json({message :'Objet enregistre'}))
            .catch(error => res.status(400).json({error}))
        })
        .catch(error => res.status(500).json({error}));
};

exports.ReadOnePerson = (req, res, next) =>{
    Person.findOne({_id: req.params.id})
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(400).json({error}))
  };

exports.ReadAllPerson = (req, res, next) => {
    Person.find()
    .then(persons => res.status(200).json(persons))
    .catch(error => res.status(400).json({error}))
}