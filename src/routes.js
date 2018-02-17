import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursePage from "./components/course/CoursePage";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="course" component={CoursePage}/>
  </Route>
);
