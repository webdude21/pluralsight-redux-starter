import {
  CREATE_AUTHOR_SUCCESS,
  DELETE_AUTHOR,
  LOAD_AUTHORS_SUCCESS,
  UPDATE_AUTHOR_SUCCESS
} from "../actions/actionTypes";
import createReducer from "../util/ReducerCreator";
import initialState from "./initialState";

const initialAuthors = initialState.authors;

let idEqual = (a, b) => a === b || a.id === b.id;

const actionMap = {
  [DELETE_AUTHOR]: (state = initialAuthors, { author }) => [...state.filter(athr => !idEqual(author, athr))],
  [CREATE_AUTHOR_SUCCESS]: (state = initialAuthors, { author }) => [state, Object.assign({}, author)],
  [UPDATE_AUTHOR_SUCCESS]: (state = initialAuthors, { author }) => [...state.filter(athr => !idEqual(author, athr)), Object.assign({}, author)],
  [LOAD_AUTHORS_SUCCESS]: (state = initialAuthors, action) => action.authors
};

export default createReducer(actionMap);

