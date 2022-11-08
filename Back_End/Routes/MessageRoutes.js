const express = require('express');
const route = express.Router();
const MessageCtrl = require("../Controllers/Messages");

route.post('/message', MessageCtrl.PostMessage);
  
  route.get('/messages/:id', MessageCtrl.ReadMessages);

  module.exports = route;