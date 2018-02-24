import React, { Component } from "react";
import { bindAllMethods } from "../../util/ContextBinder";
import { connect } from "react-redux";
import * as PropTypes from "react/lib/ReactPropTypes";
import { bindActionCreators } from "redux";
import * as authorActions from "../../actions/authorActions";
import AuthorList from "./AuthorList";
import toastr from "toastr";

class AuthorsPage extends Component {
  constructor(props, context) {
    super(props, context);

    bindAllMethods(this);
  }

  handleAuthorDelete(author) {
    toastr.success(`"${author.firstName} ${author.lastName}" successfully deleted`);
    this.props.actions.deleteAuthor(author);
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
        <AuthorList deleteAuthor={this.handleAuthorDelete} authors={this.props.authors}/>
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps({ authors }) {
  return { authors };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
