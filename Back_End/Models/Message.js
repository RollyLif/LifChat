const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    idSender : { type : String, required : true},
    idReceiver : { type : String, required : true},
    textMessage : {type : String, required : true}
});

module.exports = mongoose.model('Message', MessageSchema);