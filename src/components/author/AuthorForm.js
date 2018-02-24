import React from 'react';
import TextInput from "../common/TextInput";
import * as PropTypes from "react/lib/ReactPropTypes";

const AuthorForm = ({ author, onSave, onChange, saving, errors }) => {
  let { firstName, lastName } = author;

  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={firstName}
        onChange={onChange}
        error={errors.firstName}
      />
      <TextInput
        name="lastName"
        label="Last Name"
        value={lastName}
        onChange={onChange}
        error={errors.lastName}
      />
      <input
        type="submit"
        disabled={saving}
        value={saving ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default AuthorForm;
