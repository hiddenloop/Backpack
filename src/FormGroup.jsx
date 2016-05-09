import React from 'react';

export default class FormGroup extends React.Component {
  render() {
    return (
      <fieldset className="form-group">
        {this.props.children}
      </fieldset>
    );
  }
}
