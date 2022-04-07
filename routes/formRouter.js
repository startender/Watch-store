require('dotenv').config();
const router = require('express').Router();
const nodemailer = require('nodemailer');
const { User } = require('../db/models');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

router.route('/sendform')
  .post(async (req, res) => {
    const {
      title, phone, email, img,
    } = req.body;
    if (title && phone && email && img) {
      await User.create({
        name: title, phone, email, img,
      });
      const mailOptions = {
        from: 'dchikashovwork@gmail.com',
        to: email,
        subject: 'Магазин часов',
        text: 'Мы приняли ваш заказ',
      };
      transporter.sendMail(mailOptions);
      return res.redirect('/');
    }
  });

module.exports = router;
