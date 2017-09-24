import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <ul className="nav nav-pills">
        <li role="presentation" className="active">
          <Link to="/">Home</Link>
        </li>
        <li role="presentation">
          <Link to="/Students">Students</Link>
        </li>
      </ul>
    </div>
  );
}
