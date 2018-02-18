import React from "react";
import { IndexLink, Link } from "react-router";

const Header = () => (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/courses" activeClassName="active">Courses</Link>
    {" | "}
    <Link to="/course" activeClassName="active">Add Course</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
  </nav>
);

export default Header;
