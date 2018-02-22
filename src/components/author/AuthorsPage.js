import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import { connect } from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";
import { bindActionCreators } from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorList from "./AuthorList";

class AuthorsPage extends Component {

  constructor(props, context) {
    super(props, context);

    bindAllMethods(this);
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <input
          type="submit"
          value="Add Author"
          className="btn btn-primary"
        />
        <AuthorList authors={this.props.authors}/>
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired
};


function mapStateToProps({ authors }, ownProps) {
  return { authors };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
