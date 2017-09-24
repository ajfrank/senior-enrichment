import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <ul className="nav nav-pills">
        <li role="presentation" className="active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li role="presentation">
          <NavLink to="/Students">Students</NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}
