const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactsSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  name:{
    type:String,
  },

  email:{
    type:String,
  },

  message:{
    type:String,
  },

  date:{
    type:Date,
    default:Date.now
  },

});


module.exports = mongoose.model('contacts', ContactsSchema)