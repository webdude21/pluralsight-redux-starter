import React, { Component } from 'react';
import { bindAllMethods } from '../../util/ContextBinder';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorForm from './AuthorForm';
import * as PropTypes from 'react/lib/ReactPropTypes';
import toastr from 'toastr';

class ManageAuthorPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      saving: false
    };

    bindAllMethods(this);
  }

  componentWillReceiveProps({ author }) {
    if (this.props.author && this.props.author.id === author.id) {
      return;
    }

    this.setState({ author: Object.assign({}, author) });
  }

  handleSaveSuccess() {
    const { firstName, lastName } = this.state.author;
    this.setState({ saving: false });
    toastr.success(`"${firstName} ${lastName}" is successfully saved!`);
    this.context.router.push('/authors');
  }

  handleSave(event) {
    event.preventDefault();
    const { author } = this.state;

    this.setState({ saving: true });

    this.props.actions.saveAuthor(author)
      .then(this.handleSaveSuccess);
  }

  handleChange({ target: { value, name } }) {
    const author = Object.assign({}, this.state.author, { [name]: value });
    this.setState({ author });
  }

  render() {
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          errors={this.state.errors}
          saving={this.state.saving}
          onSave={this.handleSave}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps({ authors }, { params: { id } }) {
  let author = { id: '', firstName: '', lastName: '' };

  if (id) {
    const authorById = authors.find(value => value.id === id);
    author = authorById || author;
  }

  return { author };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
