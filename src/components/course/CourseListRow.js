import React, { Component, PropTypes } from 'react';
import { Link } from "react-router";
import { bindAllMethods } from "../../util/ContextBinder";

class CourseListRow extends Component {
  constructor(props, context) {
    super(props, context);

    bindAllMethods(this);
  }

  handleDeleteCourse() {
    this.props.deleteCourse(this.props.course);
  }

  render() {
    let { watchHref, id, title, authorId, category, length } = this.props.course;

    return (
      <tr>
        <td>
          <a href={watchHref} target="_blank">Watch</a>
        </td>
        <td>
          <Link to={'/courses'} onClick={this.handleDeleteCourse}>Delete</Link>
        </td>
        <td>
          <Link to={'/course/' + id}>{title}</Link>
        </td>
        <td>{authorId}</td>
        <td>{category}</td>
        <td>{length}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;
