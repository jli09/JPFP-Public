import React from 'react';
import { Link } from 'react-router-dom';

const Campus = props => {
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
          <p>{campus.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Campus;
