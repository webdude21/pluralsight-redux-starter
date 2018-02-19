import React, { PropTypes } from 'react';
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({ course, allAuthors, onSave, onChange, loading, errors }) => {
  const { title, authorId, category, length } = course;

  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={title}
        onChange={onChange}
        error={title}
      />
      <SelectInput
        name="authorId"
        label="author"
        value={authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={authorId}
      />
      <TextInput
        name="category"
        label="Category"
        value={category}
        onChange={onChange}
        error={category}
      />
      <TextInput
        name="length"
        label="Length"
        value={length}
        onChange={onChange}
        error={length}
      />
      <input
        type="submit"
        disabled={loading}
        value={loading ? "Saving..." : "Save"}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
