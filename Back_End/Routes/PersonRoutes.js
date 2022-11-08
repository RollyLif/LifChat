const express = require('express');
const route = express.Router();
const CtrlPerson = require("../Controllers/Person");

route.post('/', CtrlPerson.createPerson)

route.get('/:id', CtrlPerson.ReadOnePerson)

route.get('/all', CtrlPerson.ReadAllPerson);

module.exports = route;