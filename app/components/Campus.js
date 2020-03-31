import React from 'react';

const Campus = props => {
  const { campus } = props;

  return (
    <div className="Campus_Display">
      <div className="Campus_Display_Left">
        <img src={campus.imageUrl} />
      </div>
      <div className="Campus_Display_Right">
              <h2>{campus.name}</h2>
              <h3>{campus.address}</h3>
              <p>{campus.description}</p>
      </div>
    </div>
  );
};

export default Campus;
