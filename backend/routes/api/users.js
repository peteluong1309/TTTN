const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const router = express.Router();

const { check, validationResult } = require('express-validator');

const User = require('../../models/User');


// Register user
router.post('/signup', [
  check('email', 'Chưa nhập email').isEmail(),
  check('password', 'Vui lòng nhập mật khẩu từ 6 kí tự trở lên').isLength({ min: 6 })
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { email, account, password, typeUser } = req.body;

    try {
      let user = await User.findOne({ email });


      if (user) {
        return res.status(400).json({
          errors: [
            { msg: 'Email đã tồn tại' }
          ]
        });
      }

      // typeUser = "HV";
      if (typeUser === '') {
        typeUser = "HV";
      }
      else if (typeUser === 'GV') {
        typeUser = "GV";
      }

      user = new User({
        email,
        account,
        password,
        typeUser,

      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'),
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token })
        });

      // res.send('User registered');

    } catch (error) {
      console.error(error.messsage);
      res.status(500).send('Server error');
    }
  });

// Login user
router.post('/login', [
  check('email', 'Vui lòng nhập email').not().isEmpty().isEmail(),
  check('password', 'Vui lòng nhập mật khẩu').exists()
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          errors: [
            { msg: 'Tài khoản hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra lại!' },
          ]
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [
            { msg: 'Tài khoản hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra lại!' },
          ]
        });
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token })
        });

      // res.send('User registered');

    } catch (error) {
      console.error(error.messsage);
      res.status(500).send('Server error');
    }
  });
module.exports = router;