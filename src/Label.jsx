import React from 'react';
import ReactDOM from 'react-dom';

export default class Label extends React.Component {
  render() {
    return (
      <label>
        {this.props.children}
      </label>
    );
  }
}
