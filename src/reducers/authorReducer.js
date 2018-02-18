import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";
import createReducer from "../util/ReducerCreator";

const actionMap = {
  [LOAD_AUTHORS_SUCCESS]: (state = [], action) => action.authors
};

export default createReducer(actionMap);

