const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleCampus = await Campus.findOne({
      where: { id: req.params.id },
      include: [{ model: Student }]
    });
    res.json(singleCampus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
