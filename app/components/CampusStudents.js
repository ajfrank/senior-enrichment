import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store from "../store";
import { fetchCampuses } from "../reducers/campuses";
import { fetchStudents } from "../reducers/students";

function CampusStudents(props) {
  const { students, campus } = props;
  if (!campus) return <h1>LOADING</h1>;

  return (
    <div className="col-sm-4">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>{campus.name}</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {students.filter(s => s.campusId === campus.id).map(student => (
              <li className="list-group-item" key={student.id}>
                <Link to={`/students/${student.id}`}>{student.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campus: state.campuses.find(
      aCampus => aCampus.id === +ownProps.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusStudents);
