import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../reducers/students";
import store from "../store";

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.removeStudentCallback = this.removeStudentCallback.bind(this);
  }

  removeStudentCallback(e) {
    console.log(this.props);
    const { deleteStudent } = this.props;
    store.dispatch(deleteStudent(e.target.value));
  }

  render() {
    const { students } = this.props;
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
            {students.map(student => {
              return (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.campus.name}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      value={student.id}
                      onClick={this.removeStudentCallback}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { students: state.students };
};

const mapDispatchToProps = dispatch => {
  return { deleteStudent };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
