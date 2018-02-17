import { CREATE_COURSE } from "../actions/actionTypes";

const actionMap = {
  [CREATE_COURSE]: (state = [], action) => [...state, Object.assign({}, action.course)]
};

export default function courseReducer(state = [], action) {
  let actionFunction = actionMap[action.type];
  return actionFunction ? actionFunction(state, action) : state;
}
