import * as actionTypes from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import { beginAjaxCall, handleError } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function createAuthorSuccess(author) {
  return { type: actionTypes.CREATE_AUTHOR_SUCCESS, author };
}

export function updateAuthorSuccess(author) {
  return { type: actionTypes.UPDATE_AUTHOR_SUCCESS, author };
}

export function deleteAuthor(author) {
  AuthorApi.deleteAuthor(author.id);
  return { type: actionTypes.DELETE_AUTHOR, author };
}

export function saveAuthor(author) {
  return function (dispatch) {
    const created = author.id === undefined;
    const appropriateAction = created ? createAuthorSuccess : updateAuthorSuccess;

    dispatch(beginAjaxCall());

    return AuthorApi
      .saveAuthor(author)
      .then(author => dispatch(appropriateAction(author)))
      .catch(err => handleError(dispatch, err));
  };
}

export function loadAuthors() {
  return function (dispatch) {

    dispatch(beginAjaxCall());

    return AuthorApi.getAllAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors)))
      .catch(err => handleError(dispatch, err));
  };
}
