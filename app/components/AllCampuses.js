import React from 'react';
import { connect } from 'react-redux';

const campuses = [
  {
    name: 'Brooklyn UI Academy',
    address: '86 Atlantic Ave., Brooklyn, NY',
    description: 'Learn to make beautiful front end layouts!',
  },
  {
    name: 'East Village School',
    address: '7 2nd Ave., New York, NY',
    description: 'Master the back-end!',
  },
  {
    name: 'Fullstack Bootcamp',
    address: 'remote',
    description: 'Acquire the fundamentals of fullstack development!',
  },
];

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  render() {
    return (
      <div>
        <h1>All Campuses</h1>
        <ul>
          {campuses.map((campus, index) => (
            <li key={index}>
              <img src={campus.imageUrl} />
              <h2>{campus.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = () => {
  return {};
};

const mapDispatch = () => {
  return {};
};

export default connect(mapState, mapDispatch)(AllCampuses);
