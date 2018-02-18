import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import { connect } from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";

export default class ManageCoursesPage extends Component{
  constructor(props, context){
    super(props, context);

    bindAllMethods(this);
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  render(){
    return (
      <div>
        <h2>Add course</h2>
        <input type="text"
               onChange={this.onTitleChange}
               value={this.state.course.title}
        />
        <input type="submit"
               onClick={this.onClickSave}
               value="Save"
        />
      </div>
    );
  }
}

ManageCoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};
