const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// const { check, validationResult } = require('express-validator');

const Profile = require('./../../models/Profile');

router.get('/me', auth, async (req, res) => {

  try {

    let profile = await Profile.findOne({ user: req.user.id }).populate('user', ['email', 'account']);

    if (!profile) {
      return res.status(400).json({
        msg: "Không có thông tin của tài khoản"
      })
    }

    res.json(profile);
    // res.send('Profile route');

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }


});



// Create or update profile
router.post('/', auth, async (req, res) => {
  const { avatar, name, phone, facebook, twitter, linkedin, instagram } = req.body;

  const profileField = {};
  profileField.user = req.user.id;
  if (avatar) profileField.avatar = avatar;
  if (name) profileField.name = name;
  if (phone) profileField.phone = phone;

  profileField.social = {};
  if (facebook) profileField.social.facebook = facebook;
  if (twitter) profileField.social.twitter = twitter;
  if (linkedin) profileField.social.linkedin = linkedin;
  if (instagram) profileField.social.instagram = instagram;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileField },
        { new: true });
      return res.json(profile);
    }

    // Create
    profile = new Profile(profileField);
    (await profile).save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;