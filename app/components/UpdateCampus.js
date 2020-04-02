import React from 'react';

const UpdateCampus = props => {
  return (
    <div className="form_container">
      <h3>Update Campus</h3>
      <form>
        <p>
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" />
        </p>

        <p>
          <label htmlFor="address">Address: </label>
          <input name="address" type="text" />
        </p>

        <p>
          <label htmlFor="description">Description: </label>
          <textarea name="description" type="text" />
        </p>

        <p>
          <button type="submit" className="submit_button">
            Save Changes
          </button>
        </p>
      </form>
    </div>
  );
};

export default UpdateCampus;
