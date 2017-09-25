import React from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";

class Student extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StudentForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
