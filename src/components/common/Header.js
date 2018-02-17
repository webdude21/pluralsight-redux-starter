import React from "react";
import { IndexLink, Link } from "react-router";

const Header = () => (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/course" activeClassName="active">Course</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
  </nav>
);

export default Header;
