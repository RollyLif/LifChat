const Person = require('../Models/Person');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

exports.PersonLogin = (req, res, next) =>{
    Person.findOne({$or: [{'email':req.body.username},{'name':req.body.username}]})
      .then(person => {
        if(person === null){
            res.status(401).json({message : 'Paire identifiant/Mot de passe incorrect'})
        } else {
            bcrypt.compare(req.body.password, person.password)
             .then(valid => {
                if(!valid){
                    res.status(401).json({message : 'Paire identifiant/Mot de passe incorrect'})
                    console.log('pas correct')
                }else{
                    res.status(200).json({
                        personId : person._id,
                        token : jwt.sign(
                            {userId : person._id},
                            'TOKEN_SECRET_KEY',
                            { expiresIn : '24h'}

                        )
                    });
                }
             })
             .catch(error => res.status(500).json({error}))
        }
      })
      .catch(error => res.status(500).json({error}))
}

exports.ReadOnePerson = (req, res, next) =>{
    Person.findOne({_id: req.params.id}).select(["name", "email"])
      .then(person => res.status(200).json(person))
      .catch(error => res.status(400).json({error}))
  };

exports.ReadAllPerson = (req, res, next) => {
    Person.find({_id: {$ne : req.params.id}}).select(
        "name","email", "_id"
    )
    .then(person => res.status(200).json(person))
    .catch(error => res.status(400).json({error}))
}