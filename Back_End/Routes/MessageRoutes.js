const express = require('express');
const MessageCtrl = require("../Controllers/Messages");
const auth = require("../Middleware/auth");

const route = express.Router();

route.post('/message', MessageCtrl.PostMessage);  
route.get('/messages/:id', MessageCtrl.ReadMessages);

module.exports = route;