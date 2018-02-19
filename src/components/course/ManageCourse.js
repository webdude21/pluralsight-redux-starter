import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import * as PropTypes from "react/lib/ReactPropTypes";
import * as courseActions from "../../actions/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CourseForm from "./CourseForm";

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    bindAllMethods(this);
  }

  handleSave(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
  }

  handleChange({ target: { name, value } }) {
    let course = Object.assign({}, this.state.course);
    course[name] = value;
    return this.setState({course});
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
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


function mapStateToProps(state, ownProps) {
  const course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

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
