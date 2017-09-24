import React, { Component } from "react";
import { Route } from "react-router-dom";
import Campuses from "./Campuses";
import Nav from "./Nav";
import NewCampusForm from "./NewCampusForm";
import Students from "./Students";
import CampusStudents from "./CampusStudents";
import store from "../store";
import { fetchCampuses } from "../reducers/campuses";
import { fetchStudents } from "../reducers/students";

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
          <Route path="/campus" component={Campuses} />
          <Route path="/students" component={Students} />
          <Route path="/campus/add" component={NewCampusForm} />
          <Route exact path="/campus/:id" component={CampusStudents} />
        </div>
      </div>
    );
  }
}
