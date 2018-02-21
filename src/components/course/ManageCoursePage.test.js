import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageCoursePage } from "./ManageCourse";

describe('Managed Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    expect(saveButton.prop('value')).toBe('Save');
  });
});
