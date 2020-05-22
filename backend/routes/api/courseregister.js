const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const RegisterCourse = require('../../models/RegisterCourse');
const User = require('../../models/User');

router.post('/', auth, async (req, res) => {

  try {
    const { user, course } = req.body;
    const userRegist = await User.findById({ user: req.user.id });
    const courseRegist = await RegisterCourse.findById({ course: req.course._id });

    if (!userRegist || !courseRegist) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Khóa học hoặc người dùng không tồn tại!'
          }
        ]
      })
    }

    const courseRegistered = new RegisterCourse({ user, course });
    await courseRegistered.save();
    res.json(courseRegistered);
  } catch (err) {
    console.error(err.message);
    res.status(500)
  }
})
module.exports = router;