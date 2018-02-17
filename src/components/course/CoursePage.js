import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import { connect } from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";

class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { course: { title: "" } };

    bindAllMethods(this);
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add course</h2>
        {this.props.courses.map(this.courseRow)}
        <input type="text"
               onChange={this.onTitleChange}
               value={this.state.course.title}
        />
        <input type="submit"
               onClick={this.onClickSave}
               value="Save"
        />
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
