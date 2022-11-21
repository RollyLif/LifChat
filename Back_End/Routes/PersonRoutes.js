const express = require('express');
const CtrlPerson = require("../Controllers/Person");
const auth = require("../Middleware/auth");
const route = express.Router();

route.post('/', CtrlPerson.createPerson);
route.post('/login', CtrlPerson.PersonLogin);
route.get('/:id', CtrlPerson.ReadOnePerson);
route.get('/all/:id',CtrlPerson.ReadAllPerson);

module.exports = route;