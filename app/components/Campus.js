import React from 'react';
import { Link } from 'react-router-dom';
import { destroyCampus } from '../redux/campuses';
import { connect } from 'react-redux';

const Campus = props => {
  const { campus } = props;

  return (
    <div className="campus_display">
      <div className="campus_display_left">
        <img src={campus.imageUrl} className="campus_img" />
      </div>
      <div className="campus_display_right">
        <div className="delete_bar">
          <button
            type="button"
            className="delete_button"
            onClick={() => props.deleteCampus(campus.id)}
          >
            X
          </button>
        </div>
        <Link to={`/campuses/${campus.id}`}>
          <h2>{campus.name}</h2>
        </Link>
        <h3>{campus.address}</h3>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteCampus: id => {
    dispatch(destroyCampus(id));
  },
});

export default connect(null, mapDispatchToProps)(Campus);
