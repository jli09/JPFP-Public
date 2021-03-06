import React from 'react';
import { Link } from 'react-router-dom';

const StudentCampus = props => {
  const { campus } = props;

  return (
    <Link to={`/campuses/${campus.id}`}>
      <div className="campus_display">
        <div className="campus_display_left">
          <img src={campus.imageUrl} className="campus_img" />
        </div>
        <div className="campus_display_right">
          <h2>{campus.name}</h2>
          <h3>{campus.address}</h3>
        </div>
      </div>
    </Link>
  );
};

export default StudentCampus;
