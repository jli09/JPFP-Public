import React from 'react';
import { connect } from 'react-redux';
import { createStudent } from '../redux/students';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
      console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addStudent(this.state);
    this.setState({ firstName: '', lastName: '', email: '' });
  }

  render() {
    let disabled = true;

    if (this.state.firstName && this.state.lastName && this.state.email) {
      disabled = false;
    }

    return (
      <div className="add_student_container">
        <h2>Add New Student:</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="firstName">First Name: </label>
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="lastName">Last Name: </label>
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <button type="submit" className="submit_button" disabled={disabled}>
              Submit
            </button>
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addStudent: student => dispatch(createStudent(student)),
});

export default connect(null, mapDispatchToProps)(AddStudent);
