import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type}
        className="form-control"
        id={this.props.id}
        required={this.props.required}
        placeholder={this.props.children} />
    );
  }
}
