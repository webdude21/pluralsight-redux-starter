import React, { PropTypes } from "react";
import { IndexLink, Link } from "react-router";
import LoadingDots from "./LoadingDots";

const Header = ({ loading }) => (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/courses" activeClassName="active">Courses</Link>
    {" | "}
    <Link to="/course" activeClassName="active">Add Course</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
    <LoadingDots loading={loading}/>
  </nav>
);

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
