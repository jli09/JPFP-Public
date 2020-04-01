import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses } from '../redux/campuses';
import Campus from './Campus';

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    return (
      <div id="all_campus_container">
        <div id="all_campus_header">
          <h1>All Campuses</h1>

          <button
            type="button"
            className="add_button"
            onClick={() => this.props.history.push("/campuses/add")}
          >
            Add
          </button>
        </div>
        <div id="all_campus_main">
          {this.props.campuses.map(campus => (
            <Campus key={campus.id} campus={campus} />
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatch = dispatch => {
  return {
    getCampuses: () => {
      dispatch(fetchCampuses());
    },
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
