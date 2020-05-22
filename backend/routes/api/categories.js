const express = require('express');
const router = express.Router();

const CourseCategories = require('../../models/CourseCategories');

router.get('/', async (req, res) => {
  try {
    const category = await CourseCategories.find();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  // res.send('Categories route');
})

router.post('/', (req, res) => {
  try {
    const { categoriesID, categoriesName, course } = req.body;

    const courseCategory = new CourseCategories({
      categoriesID,
      categoriesName,
      course
    });

    courseCategory.save((err, categories) => {
      if (err) throw err;
      console.log(categories.categoriesName + 'luu thanh cong');
    })

    res.send('Categories route');

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;