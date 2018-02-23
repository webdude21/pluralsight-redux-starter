import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageCoursePage } from "./ManageCourse";

describe('Managed Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: {
        saveCourse: () => Promise.resolve()
      },
      course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
    };

    const context = {
      router: {
        setRouteLeaveHook: () => {}
      }
    };

    const page = <ManageCoursePage {...props}/>;
    const wrapper = mount(page);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    expect(saveButton.prop('value')).toBe('Save');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    expect(saveButton.prop('value')).toNotBe('Saving....');
  });
});
