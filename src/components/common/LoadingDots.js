/* eslint-disable react/no-did-mount-set-state */
import React, { Component, PropTypes } from 'react';
import { bindAllMethods } from "../../util/ContextBinder";

export default class LoadingDots extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { frame: 1 };

    bindAllMethods(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.addDot, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addDot() {
    this.setState({ frame: this.state.frame + 1 });
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = ".".repeat(dots);

    if (!this.props.loading) {
      return null;
    }

    return <span {...this.props}>{text}</span>;
  }
}

LoadingDots.defaultProps = {
  interval: 200, dots: 10, loading: false
};

LoadingDots.propTypes = {
  loading: PropTypes.bool,
  interval: PropTypes.number,
  dots: PropTypes.number
};

