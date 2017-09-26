import React from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";

class Student extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { student } = this.props;
    return (
      <div>
        <StudentForm student={student} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    student: state.students.find(
      aStudent => aStudent.id === +ownProps.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
