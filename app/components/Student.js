import React from 'react';

const Student = props => {
  const { student } = props;

  return (
    <div className="student_display">
        <img src={student.imageUrl} className="student_img" />
          <h3>{student.firstName} {student.lastName}</h3>
          <p>{student.campus ? student.campus.name : 'no campus'}</p>
    </div>
  );
};

export default Student;
