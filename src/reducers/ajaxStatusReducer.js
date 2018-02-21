import initialState from "./initialState";
import { BEGIN_AJAX_CALL } from "../actions/actionTypes";

const initialAjaxCalls = initialState.ajaxCallsInProgress;

export default (state = initialAjaxCalls, { type }) => {
  if (type === BEGIN_AJAX_CALL) {
    state += 1;
  } else if (type.endsWith("SUCCESS") || type.endsWith("ERROR")) {
    state -= 1;
  }

  return state;
};
