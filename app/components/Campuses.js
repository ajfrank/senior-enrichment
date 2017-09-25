import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Campus from "./Campus";

function Campuses(props) {
  return (
    <div className="col-sm-8">
      <div className="row">
        <h1>
          Campuses
          <button
            className="btn btn-default pull-right"
            title="Add New Campus"
            onClick={() => {
              props.history.push("/campus/form/add");
            }}
          >
            <span className="glyphicon glyphicon-plus" />
          </button>
        </h1>
      </div>
      <div className="row">
        {props.campuses.map(campus => {
          return <Campus key={campus.id} campus={campus} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

export default connect(mapStateToProps)(Campuses);
