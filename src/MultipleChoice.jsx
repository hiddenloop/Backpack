import React from 'react';
import Button from './Button.jsx';
import GridRow from './GridRow.jsx';
import GridColumn from './GridColumn.jsx';
import classNames from 'classnames/bind';
import Input from './Input.jsx';

export default class MultipleChoice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
  }

  update(value){

    var values =  this.state.values;
    var index = values.indexOf(value);

    // if already exists remove value
    if (index > -1) {
      values.splice(index, 1);

    // if multiple allowed push
    }else if(this.props.multiple){
      values.push(value);

    // set values
    }else{
      values = [value];
    }

    console.log("values: " + values)

    // update state
    this.setState({
      values: values
    })
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {

        var value = child.props.children;
        var active = this.state.values.indexOf(value) > -1
        const classes = classNames('option', 'btn-block', {
          'btn-secondary-outline': active,
          'btn-primary-outline': !active
        });

        return (
          <GridColumn className="col-sm-4">
            <Button className={classes} ariaPressed={active}
            onClick={this.update.bind(this, value)}>
              {"[ " + child.props.letter + " ] " + value}
            </Button>
          </GridColumn>
        );
      });
    return (
      <GridRow className="multiple-choice">
        <GridColumn className="col-sm-8">
        {children}
        <Input required={this.props.required} value={this.state.values} className=""/>
        </GridColumn>
      </GridRow>
    );
  }
}
