import React from "react";
import { connect } from "react-redux";

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
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

export class AllStudents extends React.Component {
  render() {
    return (
      <div>
        <h1>All Students</h1>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <img src={student.imageUrl} />
              <h2>{student.firstName} {student.lastName}</h2>
            </li>
          ))}
        </ul>{' '}
      </div>
    );
  }
}

const mapState = () => {
  return {};
};

const mapDispatch = () => {
  return {};
};

export default connect(mapState, mapDispatch)(AllStudents);
