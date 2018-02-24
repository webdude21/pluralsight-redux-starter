/* eslint-disable react/jsx-no-bind */
import React, { PropTypes } from 'react';
import { Link } from "react-router";

const AuthorsListRow = ({ author, deleteAuthor }) => {
  const { id, firstName, lastName } = author;

  return (
    <tr>
      <td>
        <Link to={'/author/' + id}>{id}</Link>
      </td>
      <td>
        <Link to={'/authors'} onClick={deleteAuthor.bind(null, author)}>Delete</Link>
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
    </tr>
  );
};

AuthorsListRow.propTypes = {
  author: PropTypes.object.isRequired,
  deleteAuthor: PropTypes.func.isRequired
};

export default AuthorsListRow;
