const express = require('express');
const MessageCtrl = require("../Controllers/Messages");
const auth = require("../Middleware/auth");

const route = express.Router();

route.post('/message', MessageCtrl.PostMessage);  
route.get('/messages/:id', MessageCtrl.ReadMessages);
route.get('/message/conversation/:id', MessageCtrl.ConnectedUsers);

module.exports = route;