import * as types from './actionTypes';

export function beginAjaxCall() {
  return { type: types.BEGIN_AJAX_CALL };
}

export function ajaxCallError(err) {
  return { type: types.AJAX_CALL_ERROR, err };
}

export function handleError(dispatch, err) {
  dispatch(ajaxCallError(err));
  throw new Error(err);
}
