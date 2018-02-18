/* eslint-disable no-console */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from "react-router";
import routes from "./routes";
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "./actions/courseActions";

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById("app")
);
