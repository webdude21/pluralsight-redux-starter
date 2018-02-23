import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [{ id: 1, title: 'Web development' }, { id: 2, title: 'Databases' }];
    const newCourse = { title: 'Data Structures' };

    const actual = courseReducer(initialState, actions.updateCourseSuccess(newCourse));

    expect(actual.length).toBe(3);

    expect(actual[0].title).toEqual('Web development');
    expect(actual[1].title).toEqual('Databases');
    expect(actual[2].title).toEqual('Data Structures');
  });
});
