import React from 'react';

const UpdateCampus = props => {
  const { name, address, description } = props;

  return (
    <div className="form_container">
      <h3>Update Campus</h3>
      <form>
        <p>
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" value={name} />
        </p>

        <p>
          <label htmlFor="address">Address: </label>
          <input name="address" type="text" value={address} />
        </p>

        <p>
          <label htmlFor="description">Description: </label>
          <textarea name="description" type="text" value={description} />
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
