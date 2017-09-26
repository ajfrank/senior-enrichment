import React, { Component } from "react";
import { Route } from "react-router-dom";
import Campuses from "./Campuses";
import Nav from "./Nav";
import NewCampusForm from "./NewCampusForm";
import StudentForm from "./StudentForm";
import Students from "./Students";
import Student from "./Student";
import CampusStudents from "./CampusStudents";
import store from "../store";
import { fetchCampuses } from "../reducers/campuses";
import { fetchStudents } from "../reducers/students";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Main extends Component {
  componentDidMount() {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="row">
          <Route exact path="/" component={Campuses} />
          {/* Campus Routes */}
          <Route path="/campus" component={Campuses} />
          <Route path="/campus/form/add" component={NewCampusForm} />
          <Route exact path="/campus/:id" component={CampusStudents} />
          {/* Student Routes */}
          <Route path="/students" component={Students} />
          <Route exact path="/students/:id" component={Student} />
          <Route
            path="/students/form/add"
            render={() => <StudentForm addStudent={true} />}
          />
        </div>
      </div>
    );
  }
}
