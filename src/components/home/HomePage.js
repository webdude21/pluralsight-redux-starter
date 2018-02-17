import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {

  render() {
    return (<div className="jumbotron">
        <h1>PluralSight Administration</h1>
        <p>React</p>
        <Link to="about" className="bnt btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}
