import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
import errorMiddleware from '../middleware/ErrorHandlingMiddleware';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, errorMiddleware)
  );
}
