const mongoose = require('mongoose');


const AuthorSchema =new mongoose.Schema({
  fname: {
    type: String,
    required: "fname is require",
    trim: true
  },

  lname: {
    type: String,
    required: "lname is require",
    trim: true
  },

  title: {
    type: String,
    required: "title is require",
    enum: ["Mr", "Mrs", "Miss"],
    trim: true
  },

  email: {
    type: String,
    trim: true,
    required: "email is require",
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: "password is require",
    trim: true
  }

}, { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);