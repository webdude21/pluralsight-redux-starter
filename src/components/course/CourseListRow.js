import React, { PropTypes } from 'react';
import { Link } from "react-router";

const CourseListRow = ({ course, course: { watchHref, id, title, authorId, category, length }, deleteCourse }) => {
  let handleDeleteCourse = () => deleteCourse(course);

  return (
    <tr>
      <td>
        <a href={watchHref} target="_blank">Watch</a>
      </td>
      <td>
        <Link to={'/courses'} onClick={handleDeleteCourse}>Delete</Link>
      </td>
      <td>
        <Link to={'/course/' + id}>{title}</Link>
      </td>
      <td>{authorId}</td>
      <td>{category}</td>
      <td>{length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;
