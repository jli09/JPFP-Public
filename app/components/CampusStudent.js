import React from 'react';
import { Link } from 'react-router-dom';

const CampusStudent = props => {
  const { student, unregister } = props;

  return (
    <div className="campus_student_display">
      <Link to={`/students/${student.id}`}>
        <img src={student.imageUrl} className="campus_student_img" />
      </Link>

      <p>
        {student.firstName} {student.lastName}
      </p>
      <button
        type="button"
        onClick={() => {
          unregister(student.id);
        }}
      >
        Unregister
      </button>
    </div>
  );
};

export default CampusStudent;
