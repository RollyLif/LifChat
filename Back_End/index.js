const express = require('express');
const mongoose = require('mongoose');
const PersonRoute = require('./Routes/PersonRoutes');
const MessageRoute = require('./Routes/MessageRoutes');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);

require('dotenv').config();

const URL = process.env.URL;
const PORT = process.env.PORT || 2020;

mongoose.connect(URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/person', PersonRoute);
app.use('/private', MessageRoute);

http.listen(PORT, ()=>console.log("http://localhost:"+PORT));

const io = require('socket.io')(http,{
  cors:{
    origin:'*',
  },
});

global.onlineUsers = new Map();

io.on('connection', (socket) =>{
  global.chatSocket = socket;
  socket.on("add-user",(userId)=>{
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.idReceiver);
    if(sendUserSocket){
      socket.to(sendUserSocket).emit("msg-recieve", data)
    }
  });

    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
  });
});