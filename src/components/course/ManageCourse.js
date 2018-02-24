import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import * as PropTypes from "react/lib/ReactPropTypes";
import * as courseActions from "../../actions/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";
import toastr from 'toastr';
import { authorsFormattedForDropdown } from "../../selectors/selectors";

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

  componentDidMount() {
    if (!this.context.router) {
      return;
    }
    this.context.router.setRouteLeaveHook(this.props.route, this.handleUnsavedChanges);
  }

  componentWillReceiveProps({ course }) {
    if (this.props.course && this.props.course.id === course.id) {
      return;
    }

    this.setState({ course: Object.assign({}, course) });
  }

  handleSave(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({ saving: true });

    this.props
      .actions
      .saveCourse(this.state.course)
      .then(this.handleSaveSuccess)
      .catch(() => this.setState({ saving: false }));
  }

  handleSaveSuccess() {
    this.setState({ saving: false });
    toastr.success(`"${this.state.course.title}" successfully saved`);
    this.context.router.push('/courses');
  }

  handleChange({ target: { name, value } }) {
    const course = Object.assign({}, this.state.course, { [name]: value });
    return this.setState({ course });
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.title.length < 5) {
      formIsValid = false;
      errors.title = "Title must be at least 5 characters.";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  isFormIsDirty() {
    const courseFromProps = this.props.course;
    const courseFromState = this.state.course;

    return Object
      .keys(courseFromProps)
      .some(key => courseFromProps[key] !== courseFromState[key]);
  }

  handleUnsavedChanges() {
    if (this.isFormIsDirty()) {
      return 'You have unsaved information, are you sure you want to leave this page?';
    }
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
  authors: PropTypes.array.isRequired,
  route: PropTypes.object
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps({ courses, authors }, { params: { id } }) {
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (id) {
    const courseById = courses.find(value => value.id === id);
    course = courseById || course;
  }

  return {
    authors: authorsFormattedForDropdown(authors),
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
