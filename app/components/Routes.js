import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import { AllStudents } from './AllStudents';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Route path="/campuses" component={AllCampuses} />
          <Route path="/students" component={AllStudents} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
