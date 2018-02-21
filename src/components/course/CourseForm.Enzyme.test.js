import React from 'react';
import CourseForm from './CourseForm';
import expect from "expect";
import { shallow } from "enzyme";

function setup(saving = false) {
  let props = {
    course: {}, saving, errors: {},
    onSave: () => {
    },
    onChange: () => {
    }
  };

  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme', () => {
  it('render form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe('Manage Course');
  });

  it('save button labeled as "Save" when not saving', () => {
    const wrapper = setup();
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button labeled as "Save" when not saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
