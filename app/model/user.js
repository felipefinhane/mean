var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    name : {
        type : String,
    },
    email : {
        type: String
    }
});

mongoose.model('User', schema);