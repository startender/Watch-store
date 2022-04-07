const router = require('express').Router();
const { Example } = require('../db/models');

router.get('/', async (req, res) => {
  const addWatch = await Example.findAll();
  res.render('index', { addWatch });
});

router.post('/', async (req, res) => {
  const {
    title, adminId, description, image,
  } = req.body;
  try {
    const newWatch = await Example.create({
      title, adminId, description, image,
    });
    res.json({ newWatch });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  const watch = await Example.findOne({ where: { id: req.params.id } });
  res.render('update', { watch });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Example.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});
router

module.exports = router;
