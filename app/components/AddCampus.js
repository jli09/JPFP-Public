import React from 'react';

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campusName: '',
      campusAddress: '',
      campusDescription: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
  }

  handleSubmit() {
  }

  render() {
    return (
      <div className="add_campus_container">
        <h2>Add New Campus:</h2>
        <form>
          <p>
            <label htmlFor="campusName">Name: </label>
            <input name="campusName" type="text" onChange={this.handleChange} />
          </p>

          <p>
            <label htmlFor="campusAddress">Address: </label>
            <input
              name="campusAddress"
              type="text"
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="campusDescription">Description: </label>
            <input
              name="campusDescription"
              type="text"
              onChange={this.handleChange}
            />
          </p>

          <p>
            <button type="submit" onSubmit={this.handleSubmit}>
              Add
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default AddCampus;
