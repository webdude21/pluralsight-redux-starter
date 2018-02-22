import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authorActions from "../../actions/authorActions";

class ManageAuthorPage extends Component {

  constructor(props, context) {
    super(props, context);

    bindAllMethods(this);
  }

  render() {
    return (
      <div>It Works!</div>
    );
  }
}

ManageAuthorPage.propTypes = {
  //myProps: PropTypes.object.isRequired
};


function mapStateToProps({ authors }, ownProps) {
  return { authors };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
