import { DELETE_AUTHOR, LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";
import createReducer from "../util/ReducerCreator";
import initialState from "./initialState";

const initialAuthors = initialState.authors;

let idEqual = (a, b) => a === b || a.id === b.id;

const actionMap = {
  [DELETE_AUTHOR]: (state = initialAuthors, { author }) => [...state.filter(athr => !idEqual(author, athr))],
  [LOAD_AUTHORS_SUCCESS]: (state = initialAuthors, action) => action.authors
};

export default createReducer(actionMap);

