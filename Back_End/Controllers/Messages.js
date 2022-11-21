const Message = require('../Models/Message');
let connected =new Array();

exports.PostMessage = (req, res, next)=>{
    delete req.body._id;
      const messenger = new Message({
        temps : Date.now(),
          ...req.body
      })
      messenger.save()
      .then(()=> res.status(201).json({message :'Objet enregistre'}))
      .catch(error => res.status(400).json({error}))
  };

exports.ReadMessages = (req, res, next) => {
    Message.find({$or: [{'idSender':req.params.id},{'idReceiver':req.params.id}]})
    .then(messenger => res.status(200).json(messenger))
    .catch(error => res.status(400).json({error}))
  };

exports.ConnectedUsers = (req, res, next) =>{
  const id = req.params.id;
  Message.find({$or: [{'idSender':req.params.id},{'idReceiver':req.params.id}]})
    .then(messenger => {
        messenger.map(msg =>{
          if(msg.idSender == req.params.id){
            connected.push(msg.idReceiver);            
          }else{
            connected.push(msg.idSender);
          }
        })
        let unique =[...new Set(connected)]
        res.status(200).json(unique);
      }
      )
    .catch(error => res.status(400).json({error}))
};