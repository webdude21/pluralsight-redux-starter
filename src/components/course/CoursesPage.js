import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import { connect } from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";
import { browserHistory } from "react-router";

class CoursePage extends Component {
  static redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  constructor(props, context) {
    super(props, context);
    bindAllMethods(this);
  }

  render() {
    const { courses } = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={CoursePage.redirectToAddCoursePage}
        />
        <CourseList courses={courses}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
