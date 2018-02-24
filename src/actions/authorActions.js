import * as actionTypes from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import { beginAjaxCall, handleError } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function deleteAuthor(author) {
  AuthorApi.deleteAuthor(author.id);

  return { type: actionTypes.DELETE_AUTHOR, author };
}

export function loadAuthors() {
  return function (dispatch) {

    dispatch(beginAjaxCall());

    return AuthorApi.getAllAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors)))
      .catch(err => handleError(dispatch, err));
  };
}
