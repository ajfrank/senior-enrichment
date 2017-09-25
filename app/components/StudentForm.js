import React from "react";
import { connect } from "react-redux";
import { createStudent } from "../reducers/students";
import store from "../store";
import _ from "lodash";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const student = {
      name: e.target.name.value,
      email: e.target.email.value,
      campusId: e.target.campus.value
    };
    store.dispatch(this.props.createStudent(student));
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.campus.value = "";
  }

  render() {
    const { campuses, addStudent } = this.props;
    const { handleSubmit } = this;
    console.log(addStudent);
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>{addStudent ? "Add a Student" : "Edit Student"}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" />
              </div>
              <div className="form-group">
                <label>Campus</label>
                <select name="campus">
                  <option value="">(select a campus)</option>
                  {campuses.map(campus => (
                    <option value={campus.id} key={campus.id}>
                      {campus.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);
  return {
    campuses: state.campuses,
    ownForm: !_.isEmpty(ownProps) && ownProps.addStudent ? true : false
  };
};

const mapDispatchToProps = dispatch => {
  return { createStudent };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
