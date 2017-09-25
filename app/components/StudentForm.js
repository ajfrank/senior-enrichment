import React from "react";
import { connect } from "react-redux";
import { createStudent } from "../reducers/students";
import store from "../store";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const student = {
      name: e.target.name.value,
      campusId: e.target.campus.value
    };
    store.dispatch(this.props.createStudent(student));
    e.target.name.value = "";
    e.target.campus.value = "";
  }

  render() {
    const { campuses } = this.props;
    const { handleSubmit } = this;
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>Add a Student</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" />
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

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

const mapDispatchToProps = dispatch => {
  return { createStudent };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
