const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Course = require('../../models/Courses');
const User = require('../../models/User');
// const CourseCategories = require('../../models/CourseCategories');

// get list of course
router.get('/', async (req, res) => {
  try {
    const course = await Course.find()
      .populate('courseCategories', ['categoriesID', 'categoriesName'])
      .populate('user', ['email', 'account', 'name']);

    res.json(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Get course detail
router.get('/course-detail/:id', async (req, res) => {
  try {

    const course = await Course.findById(req.params.id).populate('courseCategories', ['categoriesID', 'categoriesName']).populate('user', ['email', 'account', 'name']);

    res.json(course);


  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// // Get Course By Categories
// router.get('/course-by-categories/:id', async (req, res) => {
//   try {
//     const cateID = await Course.findById(req.params.id);
//     console.log(cateID);
//     const course = await Course.find({ cateID }).populate('courseCategories');

//     res.json(course);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// Get course by categories
router.get('/categories/:categories_id', async (req, res) => {
  try {
    const course = await Course.find({ 'courseCategories': req.params.categories_id });

    if (!course) return res.status(400).json({ msg: 'Course not found' })

    res.json(course);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: "Course not found" })
    }
    res.status(500).send('Server Error');
  }
})


// post course
router.post('/', auth,
  async (req, res) => {
    const { courseName, courseDes, visited, image, dateCreated, user, courseCategories } = req.body;

    const courseField = {};
    courseField.user = req.user.id;
    if (courseCategories) courseField.courseCategories = courseCategories;
    if (courseName) courseField.courseName = courseName;
    if (courseDes) courseField.courseDes = courseDes;
    if (visited) courseField.visited = visited;
    if (dateCreated) courseField.dateCreated = dateCreated;
    if (image) courseField.image = image;



    try {
      let course = await Course.findOne({ courseName });
      let user = await Course.findOne({ user: req.user.id }).select('-password');
      if (course) {
        return res.status(400).json({
          errors: [
            { msg: 'Tên khóa học đã tồn tại' },
          ]
        });
      }



      course = new Course({ courseField });
      (await course).save();
      res.json(course)
      // if (user) {
      //   await course.save((err, course) => {
      //     if (err) throw err;
      //     console.log(course.courseName + 'đã được lưu thành công');
      //     // console.log(cate);
      //     res.json(course);
      //   })
      // }

    } catch (error) {
      console.error(error.messsage);
      res.status(500).send('Server error');
    }


  }
)

// register course
router.post('/', auth, async (req, res) => {

});

module.exports = router;