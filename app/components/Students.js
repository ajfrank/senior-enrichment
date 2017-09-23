import React from "react";
import { connect } from "react-redux";

function Students(props) {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {props.students.map(student => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return { students: state.students };
};

export default connect(mapStateToProps)(Students);
