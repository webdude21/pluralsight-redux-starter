import * as actionTypes from "./actionTypes";
import courseApi from '../api/mockCourseApi';

export function createCourseSuccess(course) {
  return { type: actionTypes.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    const created = course.id !== undefined;
    const appropriateAction = created ? createCourseSuccess : updateCourseSuccess;

    return courseApi
      .saveCourse(course)
      .then(course => dispatch(appropriateAction(course)))
      .catch(err => new Error(err));
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(err => new Error(err));
  };
}
