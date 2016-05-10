import React from 'react';
import classNames from 'classnames/bind';

export default class FormGroup extends React.Component {

  render() {
  
    const classes = classNames('form-group', 'question', {
      active: this.props.active
    });

    return (
      <fieldset onClick={this.props.onClick} id={this.props.id} className={classes}>
        {this.props.children}
      </fieldset>
    );
  }
}
