import React from 'react';
import classNames from 'classnames/bind';

export default class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type}
        className={classNames('form-control', this.props.className)}
        readOnly={this.props.readOnly}
        id={this.props.id}
        value={this.props.value}
        required={this.props.required}
        placeholder={this.props.children} />
    );
  }
}
