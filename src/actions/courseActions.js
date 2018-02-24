import * as actionTypes from "./actionTypes";
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, handleError } from "./ajaxStatusActions";

export function createCourseSuccess(course) {
  return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}

export function loadCoursesSuccess(courses) {
  return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}

export function sortCourses(key) {
  return { type: actionTypes.COURSE_SORT, key };
}

export function deleteCourse(course) {
  courseApi.deleteCourse(course.id);
  return { type: actionTypes.DELETE_COURSE, course };
}


export function saveCourse(course) {
  return function (dispatch, getState) {
    const created = course.id === undefined;
    const appropriateAction = created ? createCourseSuccess : updateCourseSuccess;

    dispatch(beginAjaxCall());

    return courseApi
      .saveCourse(course)
      .then(course => dispatch(appropriateAction(course)))
      .catch(err => handleError(dispatch, err));
  };
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    return courseApi.getAllCourses()
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(err => handleError(dispatch, err));
  };
}
