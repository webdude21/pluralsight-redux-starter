import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePageConnected from "./components/course/ManageCourse";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePageConnected}/>
    <Route path="course/:id" component={ManageCoursePageConnected}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
