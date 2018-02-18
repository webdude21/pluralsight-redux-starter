import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionTypes";
import createReducer from "../util/ReducerCreator";

const actionMap = {
  [LOAD_COURSES_SUCCESS]: (state = [], action) => action.courses,
  [CREATE_COURSE]: (state = [], action) => [...state, Object.assign({}, action.course)]
};

export default createReducer(actionMap);
