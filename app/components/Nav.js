import React from "react";

export default function Nav(props) {
  return (
    <div>
      <ul className="nav nav-pills">
        <li role="presentation" className="active">
          <a href="#">Home</a>
        </li>
        <li role="presentation">
          <a href="#">Students</a>
        </li>
      </ul>
    </div>
  );
}
