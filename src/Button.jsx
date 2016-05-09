import React from 'react';
import classNames from 'classnames/bind';

export default class Button extends React.Component {
  render() {

    const classes = classNames('btn', this.props.className, {
      'btn-primary-outline': !this.props.className
    });

    return (
      <button className={classes}
      onClick={this.props.onClick}
      aria-pressed={this.props.ariaPressed}
      type={this.props.type || "button"}>
        {this.props.children}
      </button>
    );
  }
}
