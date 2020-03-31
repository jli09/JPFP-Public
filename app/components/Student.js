import React from 'react';
import { Link } from 'react-router-dom';

const Student = props => {
  const { student } = props;

  return (
    <Link to={`/students/${student.id}`}>
      <div className="student_display">
        <img src={student.imageUrl} className="student_img" />
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <p>{student.campus ? student.campus.name : 'no campus'}</p>
      </div>
    </Link>
  );
};

export default Student;
