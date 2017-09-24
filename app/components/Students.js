import React from "react";
import { connect } from "react-redux";

function Students(props) {
  return (
    <div>
      <h1>Students</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Campus</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map(student => {
            return (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.campus.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return { students: state.students };
};

export default connect(mapStateToProps)(Students);
