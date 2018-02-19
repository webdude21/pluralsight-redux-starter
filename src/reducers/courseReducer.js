import { CREATE_COURSE, LOAD_COURSES_SUCCESS, UPDATE_COURSE_SUCCESS } from "../actions/actionTypes";
import createReducer from "../util/ReducerCreator";
import initialState from "./initialState";

const initialCourse = initialState.courses;

const actionMap = {
  [LOAD_COURSES_SUCCESS]: (state = initialCourse, action) => action.courses,
  [UPDATE_COURSE_SUCCESS]: (state = initialCourse, {course}) => [...state.filter((crs => crs.id !== course.id)), Object.assign({}, course)],
  [CREATE_COURSE]: (state = initialState, action) => [...state, Object.assign({}, action.course)]
};

export default createReducer(actionMap);
