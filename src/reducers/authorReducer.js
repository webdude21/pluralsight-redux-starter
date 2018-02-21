import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";
import createReducer from "../util/ReducerCreator";
import initialState from "./initialState";

const initialAuthors = initialState.authors;

const actionMap = {
  [LOAD_AUTHORS_SUCCESS]: (state = initialAuthors, action) => action.authors
};

export default createReducer(actionMap);

