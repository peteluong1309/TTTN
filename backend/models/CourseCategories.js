const mongoose = require('mongoose');

const CourseCategoriesSchema = new mongoose.Schema({
  categoriesID: {
    type: String
  },
  categoriesName: {
    type: String
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course'
  }
});

const CourseCategories = mongoose.model('coursecategories', CourseCategoriesSchema);
module.exports = CourseCategories;