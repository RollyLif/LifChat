const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    idSender : { type : mongoose.Schema.Types.ObjectId, ref: "Person", required : true},
    idReceiver : { type : mongoose.Schema.Types.ObjectId, ref: "Person", required : true},
    textMessage : {type : String, required : true},
    temps : {type : Date, required : true}
});

module.exports = mongoose.model('Message', MessageSchema);