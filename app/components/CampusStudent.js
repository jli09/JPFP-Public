import React from 'react';

const CampusStudent = props => {
  const { student } = props;

  return (
    <div className="campus_student_display">
      <img src={student.imageUrl} className="campus_student_img" />
      <p>{student.firstName} {student.lastName}</p>
    </div>
  );
};

export default CampusStudent;
