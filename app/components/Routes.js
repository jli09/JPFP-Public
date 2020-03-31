import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route path="/students/:studentId" component={SingleStudent} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
