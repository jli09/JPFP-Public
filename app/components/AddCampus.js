import React from 'react';

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
    };
  }

  render() {
    return (
      <div className="add_campus_container">
        <h2>Add New Campus:</h2>
        <form>
          <p>
            <label htmlFor="campusName">Campus Name: </label>
            <input name="campusName" type="text" />
          </p>

                <p>
          <label htmlFor="campusAddress">Campus Address: </label>
                <input name="campusAddress" type="text" />
                </p>
        </form>
      </div>
    );
  }
}

export default AddCampus;
