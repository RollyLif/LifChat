const mongoose = require('mongoose');

const MessageSchema = moongose.Schema({
    idSender : { type : String, required : true},
    idReceiver : { type : String, required : true},
    textMessage : {type : String, required : true}
});

module.exports = moongose.model('Message', MessageSchema);