import React from 'react';

const Campus = props => {
  const { campus } = props;

  return (
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
  );
};

export default Campus;
