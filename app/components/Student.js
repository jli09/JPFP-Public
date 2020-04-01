import React from 'react';
import { Link } from 'react-router-dom';
import { destroyStudent } from '../redux/students';
import { connect } from 'react-redux';

const Student = props => {
  const { student } = props;

  return (
    <div className="student_display">
      <div className="delete_bar">
        <button
          type="button"
          className="delete_button"
          onClick={() => props.deleteStudent(student.id)}
        >
          X
        </button>
      </div>
      <img src={student.imageUrl} className="student_img" />
      <Link to={`/students/${student.id}`}>
        <h3>
          {student.firstName} {student.lastName}
        </h3>
      </Link>
      <p>{student.campus ? student.campus.name : 'no campus'}</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteStudent: id => {
    dispatch(destroyStudent(id));
  },
});

export default connect(null, mapDispatchToProps)(Student);
