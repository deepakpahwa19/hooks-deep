/** @format */

import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  state = {
    content: 'Hello World!',
  };

  render() {
    return <ChildComponent value={this.state.content} />;
  }
}

export default ParentComponent;
