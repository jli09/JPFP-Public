import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Switch>
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/campuses/add" component={AddCampus} />
            <Route path="/students/add" component={AddStudent} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/students/:studentId" component={SingleStudent} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
