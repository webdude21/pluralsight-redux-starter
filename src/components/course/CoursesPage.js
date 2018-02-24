import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import { connect } from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";
import { browserHistory } from "react-router";
import toastr from 'toastr';

class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);
    bindAllMethods(this);
  }

  handleCourseDelete(course) {
    toastr.success(`"${course.title}" successfully deleted`);
    this.props.actions.deleteCourse(course);
  }

  handleSort(sortKey) {
    this.props.actions.sortCourses(sortKey);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    const { courses } = this.props;
    let header = <h1>Courses</h1>;

    if (courses.length) {
      header = <h1>Courses # {courses.length && courses.length}</h1>;
    }

    return (
      <div>
        {header}
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} deleteCourse={this.handleCourseDelete} headerClick={this.handleSort}/>
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
