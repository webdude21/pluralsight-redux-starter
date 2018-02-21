import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import * as PropTypes from "react/lib/ReactPropTypes";
import * as courseActions from "../../actions/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";
import toastr from 'toastr';

export class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };

    bindAllMethods(this);
  }

  componentWillReceiveProps({ course }) {
    if (this.props.course && this.props.course.id === course.id) {
      return;
    }

    this.setState({ course: Object.assign({}, course) });
  }

  handleSave(event) {
    event.preventDefault();

    this.setState({ saving: true });

    this.props
      .actions
      .saveCourse(this.state.course)
      .then(this.handleSaveSuccess)
      .catch(err => {
        this.setState({ saving: false });
      });
  }

  handleSaveSuccess(payload) {
    this.setState({ saving: false });
    toastr.success(`"${this.state.course.title}" successfully saved`);
    this.context.router.push('/courses');
  }

  handleChange({ target: { name, value } }) {
    let course = Object.assign({}, this.state.course);
    course[name] = value;
    return this.setState({ course });
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          saving={this.state.saving}
          onSave={this.handleSave}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const courseIndex = courses.findIndex(value => value.id === id);
  return courses[courseIndex];
}

function mapStateToProps(state, { params: { id } }) {
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (id) {
    course = getCourseById(state.courses, id) || course;
  }

  const authorsForDropDown = state.authors.map(author => {
    return { value: author.id, text: `${author.firstName} ${author.lastName}` };
  });

  return {
    authors: authorsForDropDown,
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
