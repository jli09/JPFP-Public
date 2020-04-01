import React from 'react';
import { connect } from 'react-redux';
import { createCampus } from '../redux/campuses';

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCampus(this.state);
    this.setState({ name: '', address: '', description: '' });
    this.props.history.push("/campuses");
  }

  render() {
    let disabled = true;

    if (this.state.name && this.state.address) disabled = false;

    return (
      <div className="add_campus_container">
        <h2>Add New Campus:</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="address">Address: </label>
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="description">Description: </label>
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <button type="submit" className="submit_button" disabled={disabled}>Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCampus: campus => dispatch(createCampus(campus)),
});

export default connect(null, mapDispatchToProps)(AddCampus);
