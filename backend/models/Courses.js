const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String
  },
  courseDes: {
    type: String
  },
  visited: {
    type: String
  },
  image: {
    type: String
  },
  dateCreated: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile'
  },
  courseCategories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'coursecategories'
  }
})

const Course = mongoose.model('course', courseSchema);
module.exports = Course;