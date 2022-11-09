const express = require('express');
const MessageCtrl = require("../Controllers/Messages");
const auth = require("../Middleware/auth");

const route = express.Router();

route.post('/message', auth, MessageCtrl.PostMessage);  
route.get('/messages/:id', auth, MessageCtrl.ReadMessages);

module.exports = route;