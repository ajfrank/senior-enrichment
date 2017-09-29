import React from "react";
import { connect } from "react-redux";
import { createStudent, putStudent } from "../reducers/students";
import store from "../store";
import _ from "lodash";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: props.student
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.student !== this.props.student) {
      this.setState({
        student: nextProps.student
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const student = this.state.student;
    const { addStudent, createStudent, putStudent } = this.props;
    const thunk = addStudent ? createStudent(student) : putStudent(student);
    store.dispatch(thunk);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState({ student: Object.assign(this.state.student, change) });
  }

  render() {
    const { campuses, addStudent } = this.props;
    const { name, email, campusId } = this.state.student;
    const { handleSubmit, handleChange } = this;

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
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Campus:&nbsp;</label>
                <select
                  name="campusId"
                  onChange={handleChange}
                  value={campusId || ""}
                >
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
  console.log(ownProps.student);
  return {
    campuses: state.campuses,
    addStudent: !_.isEmpty(ownProps) && ownProps.addStudent ? true : false,
    student: ownProps.student || {
      name: "",
      email: "",
      campus: {},
      campusId: "",
      id: ""
    }
  };
};

const mapDispatchToProps = dispatch => {
  return { createStudent, putStudent };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
