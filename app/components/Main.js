import React, { Component } from "react";
import { Route } from "react-router-dom";
import Campuses from "./Campuses";
import Nav from "./Nav";
import Students from "./Students";
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
          <Route path="/" component={Campuses} />
          <Route path="/students" component={Students} />
        </div>
      </div>
    );
  }
}
