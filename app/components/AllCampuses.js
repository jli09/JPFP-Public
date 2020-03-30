import React from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../redux/campuses';

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.getCampuses();
  }

  render() {
    return (
      <div>
        <h1>All Campuses</h1>
        <ul>
          {this.props.campuses.map(campus => (
            <li key={campus.id}>
              <img src={campus.imageUrl} />
              <h2>{campus.name}</h2>
            </li>
          ))}
        </ul>
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
    getCampuses: () => { dispatch(fetchCampuses()) },
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
