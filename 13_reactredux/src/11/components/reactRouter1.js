import React, { Component } from "react";
import { Link } from 'react-router-dom';

class reactRouter1 extends Component {
  render() {
    return (
      <>
        <div class="main">
          <h1>path='/'</h1>
          <h3>reactRouter1</h3>
          <Link to={'/r2'}>Go reactRouter2</Link>
        </div>
      </>
    );
  }
}

export default reactRouter1;