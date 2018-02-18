import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionTypes";

const actionMap = {
  [LOAD_COURSES_SUCCESS]: (state = [], action) => action.courses,
  [CREATE_COURSE]: (state = [], action) => [...state, Object.assign({}, action.course)]
};

export default function courseReducer(state = [], action) {
  let actionFunction = actionMap[action.type];
  return actionFunction ? actionFunction(state, action) : state;
}
