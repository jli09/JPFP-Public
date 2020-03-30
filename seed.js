const { green, red } = require('chalk');
const { db, Campus, Student } = require('./server/db');

const campuses = [
  {
    name: 'Brooklyn UI Academy',
    address: '86 Atlantic Ave., Brooklyn, NY',
    description: 'Learn to make beautiful front end layouts!',
  },
  {
    name: 'East Village School',
    address: '7 2nd Ave., New York, NY',
    description: 'Master the back-end!',
  },
  {
    name: 'Fullstack Bootcamp',
    address: 'remote',
    description: 'Acquire the fundamentals of fullstack development!',
  },
];

const students = [
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    email: 'sholmes@consultingdetective.com',
    gpa: 2.5,
    campusId: 2,
  },
  {
    firstName: 'John',
    lastName: 'Watson',
    email: 'jwatson@consultingdetective.com',
    gpa: 3.0,
    campusId: 2,
  },
  {
    firstName: 'Mycroft',
    lastName: 'Holmes',
    email: 'mholmes@thegovernment.com',
    gpa: 4.0,
    campusId: 3,
  },
  {
    firstName: 'Irene',
    lastName: 'Adler',
    email: 'iadler@thewoman.com',
    gpa: 3.5,
    campusId: 1,
  },
  {
    firstName: 'Jim',
    lastName: 'Moriarty',
    email: 'jmoriarty@consultingcriminal.com',
    gpa: 1.0,
    campusId: 3,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(campuses.map(campus => Campus.create(campus)));

    await Promise.all(students.map(student => Student.create(student)));
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
