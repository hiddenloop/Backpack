import React from 'react';
import ReactDOM from 'react-dom';
import {sum} from './logic';

class World extends React.Component {
  render() {
    return (
      <h1>World: {sum(3,4)}</h1>
    );
  }
}

ReactDOM.render(<World/>, document.getElementById('world'));
