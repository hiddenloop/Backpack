import React from 'react';
import Label from './Label.jsx';
import Form from './Form.jsx';
import Input from './Input.jsx';
import FormGroup from './FormGroup.jsx';

export default class Page extends React.Component {
  render(){
    return(
      <Form>
        <FormGroup>
          <Label>Mail</Label>
          <Input type="email" required="true">Bitte Mail eingeben</Input>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" required="true">Bitte Passwort eingeben</Input>
        </FormGroup>
      </Form>
    );
  }
}
