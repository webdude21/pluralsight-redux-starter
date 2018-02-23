/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses, deleteCourse, headerClick }) => {

  if (!courses.length) {
    return null;
  }

  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th onClick={headerClick.bind(null, "title")}>Title</th>
        <th onClick={headerClick.bind(null, "authorId")}>Author</th>
        <th onClick={headerClick.bind(null, "category")}>Category</th>
        <th onClick={headerClick.bind(null, "length")}>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course => <CourseListRow key={course.id} course={course} deleteCourse={deleteCourse}/>)}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  headerClick: PropTypes.func
};

export default CourseList;
