import React, { PropTypes } from 'react';
import { Link } from "react-router";

const AuthorsListRow = ({ author: { id, firstName, lastName } }) => (
  <tr>
    <td>
      <Link to={'/author/' + id}>{id}</Link>
    </td>
    <td>{firstName}</td>
    <td>{lastName}</td>
  </tr>
);

AuthorsListRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorsListRow;
