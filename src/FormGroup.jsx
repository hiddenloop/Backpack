import React from 'react';
import ReactDOM from 'react-dom';

export default class FormGroup extends React.Component {
  render() {
    return (
      <fieldset className="form-group">
        {this.props.children}
      </fieldset>
    );
  }
}
