const mongoose = require('mongoose');

const UserSchema = moongose.Schema({
    name : { type : String, required : true},
    password : {type : String, required : true}
});

module.exports = moongose.model('User', UserSchema);