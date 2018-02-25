import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import loggerMiddleware from '../middleware/LoggingMiddleware';
import errorMiddleware from '../middleware/ErrorHandlingMiddleware';
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState) {
  const middleware = applyMiddleware(thunk, loggerMiddleware, errorMiddleware, reduxImmutableStateInvariant());

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );
}
