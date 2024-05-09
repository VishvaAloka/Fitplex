const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    fname : {
        type : String,
        required : true 
     },
    lname : {
       type : String,
       required : true 
    },
    email:{
        type: String,
        required: false
    },
    phone:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    },

})

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;