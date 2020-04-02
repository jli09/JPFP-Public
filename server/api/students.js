const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({ include: [{ model: Campus }] });
    res.json(students);
  } catch (err) {
    console.error(err.stack);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleStudent = await Student.findOne({
      where: { id: req.params.id },
      include: [{ model: Campus }],
    });
    res.json(singleStudent);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const [numUpdates, update] = await Student.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.json(update);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
