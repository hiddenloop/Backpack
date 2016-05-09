import React from 'react';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}
