import React from 'react';

const UpdateCampus = props => {
  const { name, address, description, handleChange } = props;

  return (
    <div className="form_container">
      <h3>Update Campus</h3>
      <form>
        <p>
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" value={name} onChange={handleChange} />
        </p>

        <p>
          <label htmlFor="address">Address: </label>
          <input
            name="address"
            type="text"
            value={address}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            type="text"
            value={description}
            onChange={handleChange}
          />
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
