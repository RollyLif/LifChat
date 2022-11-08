const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PersonSchema = mongoose.Schema({
    name : { type : String, required : true, unique : true},
    email : { type : String, required : true, unique : true},
    password : {type : String, required : true}
});

PersonSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Person', PersonSchema);