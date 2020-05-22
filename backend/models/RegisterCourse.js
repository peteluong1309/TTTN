const mongoose = require('mongoose');

const RegisterCourseSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

const RegisterCourse = mongoose.model('registercourse', RegisterCourseSchema);
module.exports = RegisterCourse;