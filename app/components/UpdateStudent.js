import React from 'react';

const UpdateStudent = props => {
  const { firstName, lastName, email, gpa, handleChange, handleSubmit } = props;

  return (
    <div className="form_container">
      <h3>Update Student</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="firstName">First Name: </label>
          <input name="firstName" type="text" value={firstName}/>
        </p>

        <p>
          <label htmlFor="lastName">Last Name: </label>
          <input name="lastName" type="text" value={lastName}/>
        </p>

        <p>
          <label htmlFor="email">Contact: </label>
          <input name="email" type="text" value={email}/>
        </p>

        <p>
          <label htmlFor="gpa">GPA: </label>
          <input name="gpa" type="text" value={gpa}/>
        </p>

        <button type="submit" className="submit_button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateStudent;
