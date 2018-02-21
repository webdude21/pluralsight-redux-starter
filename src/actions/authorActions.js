import * as actionTypes from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import { ajaxCallError, beginAjaxCall, handleError } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {

    dispatch(beginAjaxCall());

    return AuthorApi.getAllAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors)))
      .catch(err => handleError(dispatch, err));
  };
}
