import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    const initialState = [
      { id: 1, title: 'Web development' },
      { id: 2, title: 'Databases' }
    ];

    const newCourse = { title: 'Data Structures' };

    const actual = courseReducer(initialState, actions.createCourseSuccess(newCourse));

    expect(actual.length).toBe(3);

    expect(actual[0].title).toEqual('Web development');
    expect(actual[1].title).toEqual('Databases');
    expect(actual[2].title).toEqual('Data Structures');
  });

  it('should delete course when passed DELETE_COURSE', () => {
    const initialState = [
      { id: 1, title: 'Web development' },
      { id: 2, title: 'Databases' },
      { id: 3, title: 'Data Structures' }
    ];

    const actual = courseReducer(initialState, actions.deleteCourse(initialState[1]));

    expect(actual.length).toBe(2);

    expect(actual[0].title).toEqual('Web development');
    expect(actual[1].title).toEqual('Data Structures');
  });

  it('should sort the courses when passed SORT_COURSE', () => {
    const initialState = [
      { id: 1, title: 'Web development' },
      { id: 2, title: 'Databases' },
      { id: 3, title: 'Data Structures' }
    ];

    const actual = courseReducer(initialState, actions.sortCourses('title'));

    expect(actual.length).toBe(3);

    expect(actual[0].title).toEqual('Data Structures');
    expect(actual[1].title).toEqual('Databases');
    expect(actual[2].title).toEqual('Web development');
  });

  it('should update the course when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      { id: 1, title: 'Web development' },
      { id: 2, title: 'Databases' },
      { id: 3, title: 'Data Structures' }
    ];

    const actual = courseReducer(initialState, actions.updateCourseSuccess({ id: 3, title: 'Data Structures 2' }));

    expect(actual.length).toBe(3);

    expect(actual[0].title).toEqual('Web development');
    expect(actual[1].title).toEqual('Databases');
    expect(actual[2].title).toEqual('Data Structures 2');
  });
});
