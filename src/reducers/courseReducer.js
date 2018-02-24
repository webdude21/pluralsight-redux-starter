import {
  COURSE_SORT,
  CREATE_COURSE,
  DELETE_COURSE,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from "../actions/actionTypes";
import createReducer from "../util/ReducerCreator";
import initialState from "./initialState";

const initialCourse = initialState.courses;

let idEqual = (a, b) => a === b || a.id === b.id;
let sortComparator = (sortKey) => (a, b) => a[sortKey].localeCompare(b[sortKey]);

const actionMap = {
  [LOAD_COURSES_SUCCESS]: (state = initialCourse, action) => action.courses,
  [COURSE_SORT]: (state = initialCourse, { key }) => state.slice().sort(sortComparator(key)),
  [DELETE_COURSE]: (state = initialCourse, { course }) => [...state.filter(crs => !idEqual(course, crs))],
  [UPDATE_COURSE_SUCCESS]: (state = initialCourse, { course }) => [...state.filter(crs => !idEqual(course, crs)), Object.assign({}, course)],
  [CREATE_COURSE]: (state = initialCourse, { course }) => [...state, Object.assign({}, course)]
};

export default createReducer(actionMap);
