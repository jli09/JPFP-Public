const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({include: [{model: Campus}]});
    res.json(students);
  } catch (err) {
    console.error(err.stack);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  }
  catch (err) {
    next(err);
  }
})

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

module.exports = router;
