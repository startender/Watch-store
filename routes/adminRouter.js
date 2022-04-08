const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

router.route('/signup')
  // .get((req, res) => {
  //   res.render('signUp');
  // })
  .post(async (req, res) => {
    const { name, password, adminKey } = req.body;
    if (name && password && adminKey) {
      if (adminKey === '111') {
        const secretPass = await bcrypt.hash(password, 10);
        try {
          const newAdmin = await Admin.create({ name, password: secretPass });
          req.session.user = { id: newAdmin.id, name: newAdmin.name };
          return res.redirect('/');
        } catch (err) {
          console.log(err);
          res.redirect('/admin/signup');
        }
      } else {
        return res.redirect('/');
      }
    } else {
      return res.redirect('/');
    }
  });

router.route('/signin')
  // .get((req, res) => {
  //   res.render('signIn');
  // })
  .post(async (req, res) => {
    const { name, password } = req.body;
    if (name && password) {
      const currentAdmin = await Admin.findOne({ where: { name } });
      if (currentAdmin && await bcrypt.compare(password, currentAdmin.password)) {
        req.session.user = { id: currentAdmin.id, name: currentAdmin.name };
        return res.redirect('/');
      }
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
  });

module.exports = router;

