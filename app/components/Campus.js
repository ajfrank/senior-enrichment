import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCampus } from "../reducers/campuses";
import store from "../store";

class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.removeCampusCallback = this.removeCampusCallback.bind(this);
  }

  render() {
    const { campus } = this.props;
    return (
      <div className="col-md-3 col-xs-6">
        <Link to={`/campus/${campus.id}`} className="thumbnail">
          <img src={campus.image} />
          <div className="caption">
            <h3>{campus.name}</h3>
          </div>
        </Link>
        <button className="btn btn-warning" onClick={this.removeCampusCallback}>
          Delete
        </button>
      </div>
    );
  }

  removeCampusCallback(e) {
    const { campus, deleteCampus } = this.props;
    store.dispatch(deleteCampus(campus.id));
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return { deleteCampus };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
