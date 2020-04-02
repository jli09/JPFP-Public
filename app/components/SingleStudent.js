import React from 'react';
import { fetchSingleStudent, updateStudent } from '../redux/singleStudent';
import { connect } from 'react-redux';
import StudentCampus from './StudentCampus';
import UpdateStudent from './UpdateStudent';

class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      gpa: null,
      campusId: null,
      campus: null,
      edit: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.studentId;
    this.props.getSingleStudent(id);
  }

  handleClick() {
    const { student } = this.props;

    this.setState({ ...student, edit: true });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    const { student } = this.props;

    return (
      <div className="single_view_container">
        <div className="single_view_display">
          <div className="single_view_left">
            <img src={student.imageUrl} className="single_view_img" />
          </div>
          <div className="single_view_right">
            <h2>
              {student.firstName} {student.lastName}
            </h2>
            <h4>Contact: {student.email}</h4>
            <p>GPA: {student.gpa}</p>
            <button type="button" onClick={this.handleClick}>
              Edit Info
            </button>
            {this.state.edit ? (
              <UpdateStudent
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                gpa={this.state.gpa}
                handleChange={this.handleChange}
              />
            ) : (
              <div />
            )}
          </div>
        </div>
        <div className="student_campus_display">
          <div className="student_campus_msg">
            <h2>
              This student is {student.campus ? '' : 'not'} registered to a
              campus
            </h2>
          </div>
          <div className="student_campus_main">
            {student.campus && <StudentCampus campus={student.campus} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  student: state.singleStudent,
});

const mapDispatchToProps = dispatch => ({
  getSingleStudent: id => {
    dispatch(fetchSingleStudent(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
