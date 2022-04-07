const router = require('express').Router();
const { User } = require('../db/models');

router.route('/sendform')
  .post(async (req, res) => {
    const {
      title, phone, email, img,
    } = req.body;
    if (title && phone && email && img) {
      await User.create({
        name: title, phone, email, img,
      });
      return res.redirect('/');
    }
  });

module.exports = router;
