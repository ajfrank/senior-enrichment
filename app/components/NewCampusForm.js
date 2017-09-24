import React from "react";
import { connect } from "react-redux";
import { createCampus } from "../reducers/campuses";
import store from "../store";

class NewCampusForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const campus = {
      name: e.target.name.value,
      image: e.target.image.value
    };
    store.dispatch(this.props.createCampus(campus));
    e.target.name.value = "";
    e.target.image.value = "";
  }

  render() {
    return (
      <div className="col-sm-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>Add a campus</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input type="url" className="form-control" name="image" />
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return { createCampus };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampusForm);
