const { populate } = require("../Models/Message");
const Message = require("../Models/Message");
let connected = [];

exports.PostMessage = (req, res, next) => {
  delete req.body._id;
  const messenger = new Message({
    temps: Date.now(),
    ...req.body,
  });
  messenger
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistre" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.ReadMessages = (req, res, next) => {
  Message.find({
    $and: [
      {
        $or: [{ idSender: req.params.id }, { idReceiver: req.params.id }],
      },
      { $or: [{ idSender: req.body.friend }, { idReceiver: req.body.friend }] },
    ],
  })
    .then((messenger) => res.status(200).json(messenger))
    .catch((error) => res.status(400).json({ error }));
};

exports.ConnectedUsers = async (req, res, next) => {
  const id = req.params.id;
  try {
    const messenger = await Message.find({
      $or: [{ idSender: req.params.id }, { idReceiver: req.params.id }],
    }).select(["idSender", "idReceiver", "textMessage"]);
    messenger.map((msg) => {
      if(msg.idSender == req.params.id){
        return connected.push(msg.idReceiver.toString())
      }else{
        return connected.push(msg.idSender.toString())
      }
    });
      console.log([...new Set(connected)])
    let unique = await Promise.all(
      [...new Set(connected)].map(async (m) => {
        const newMsg = await Message.findOne({
          $and: [
            {
              $or: [{ idSender: id }, { idReceiver: id }],
            },
            { $or: [{ idSender: m }, { idReceiver: m }] },
          ],
        }).populate(['idSender', 'idReceiver']).sort({ temps: -1 });
        return newMsg;
      })
    );
    res.status(200).json(unique);
  } catch (error) {
    res.status(400).json({ error });
  }
};
