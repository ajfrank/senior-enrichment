import React from "react";
import { connect } from "react-redux";

function Campuses(props) {
  return (
    <div className="row">
      <h1>Campuses</h1>
      <ul>
        {props.campuses.map(campus => {
          return <li key={campus.id}>{campus.name}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

export default connect(mapStateToProps)(Campuses);
