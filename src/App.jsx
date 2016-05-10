import React from 'react';
import Form from './Form.jsx';
import FormGroup from './FormGroup.jsx';
import Label from './Label.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import GridRow from './GridRow.jsx';
import Description from './Description.jsx';
import MultipleChoice from './MultipleChoice.jsx';
import Option from './Option.jsx';
import GridColumn from './GridColumn.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup role="Start">
          <h1>Welcome</h1>
          <p>Hello text</p>
          <Button>Start</Button>
        </FormGroup>
        <FormGroup>
          <Label>1. Mail</Label>
          <Description>Enter your mail</Description>
          <Input name="mail" type="email" required="true">Please enter mail</Input>
        </FormGroup>
        <FormGroup>
          <Label>2. Password</Label>
          <Input name="password" type="password" required="true">Please enter password</Input>
        </FormGroup>
        <FormGroup>
          <Label>3. Choose multiple</Label>
          <MultipleChoice name="choose multiple" multiple="true">
            <Option letter="a">Option 1</Option>
            <Option letter="s">Option 2</Option>
            <Option letter="d">Option 3</Option>
            <Option letter="f">Option 4</Option>
          </MultipleChoice>
        </FormGroup>
        <FormGroup>
          <Label>4. Choose one</Label>
          <MultipleChoice name="choose one" required="true">
            <Option letter="a">Option 1</Option>
            <Option letter="s">Option 2</Option>
            <Option letter="d">Option 3</Option>
            <Option letter="f">Option 4</Option>
          </MultipleChoice>
        </FormGroup>
        <FormGroup role="End">
          <h1>End</h1>
          <p>World text</p>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}
