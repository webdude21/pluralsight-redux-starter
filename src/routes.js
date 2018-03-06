import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import HomePage from "./components/home/HomePage";
import CoursesPage from "./components/course/CoursesPage";
import ManageCoursePageConnected from "./components/course/ManageCourse";
import ManageAuthorPage from "./components/author/ManageAuthorPage";
import AuthorsPage from "./components/author/AuthorsPage";
import NotFoundPage from "./components/not-found/NotFoundPage";
import AboutPage from "./components/about/AboutPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="course" component={ManageCoursePageConnected}/>
    <Route path="course/:id" component={ManageCoursePageConnected}/>
    <Route path="authors" component={AuthorsPage}/>
    <Route path="author" component={ManageAuthorPage}/>
    <Route path="author/:id" component={ManageAuthorPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
