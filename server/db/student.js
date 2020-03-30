const Sequelize = require('sequelize');
const db = require('./database');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue:
        'https://cdn2.iconfinder.com/data/icons/human-resource-1/50/50-512.png',
    },
  },
  gpa: {
    type: Sequelize.FLOAT(2),
  },
});

module.exports = Student;
