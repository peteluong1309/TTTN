const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  typeUser: {
    type: String,
    required: true
  },
  account: {
    type: String
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;