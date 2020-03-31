import React from 'react';
import {Link} from 'react-router-dom'

const CampusStudent = props => {
  const { student } = props;

  return (
    <Link to={`/students/${student.id}`}>
      <div className="campus_student_display">
        <img src={student.imageUrl} className="campus_student_img" />
        <p>
          {student.firstName} {student.lastName}
        </p>
      </div>
    </Link>
  );
};

export default CampusStudent;
