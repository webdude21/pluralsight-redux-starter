/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses, deleteCourse, headerClick }) => {
  if (!courses.length) {
    return null;
  }

  let createSortHandler = (columnName) => () => headerClick(columnName);

  let titleClick = createSortHandler("title");
  let authorIdClick = createSortHandler("authorId");
  let categoryClick = createSortHandler("category");
  let lengthClick = createSortHandler("length");

  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th onClick={titleClick}>Title</th>
        <th onClick={authorIdClick}>Author</th>
        <th onClick={categoryClick}>Category</th>
        <th onClick={lengthClick}>Length</th>
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
