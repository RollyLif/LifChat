const express = require('express');
const CtrlPerson = require("../Controllers/Person");
const auth = require("../Middleware/auth");
const route = express.Router();

route.post('/',auth, CtrlPerson.createPerson);
route.get('/:id',auth,  CtrlPerson.ReadOnePerson);
route.get('/all',auth, CtrlPerson.ReadAllPerson);

module.exports = route;