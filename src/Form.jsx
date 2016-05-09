import React from 'react';
import GridRow from './GridRow.jsx';
import Button from './Button.jsx';
import elementInViewport from './functions.js';
import _ from 'underscore';

export default class Form extends React.Component {
  render() {
    return (
      <div class="form">

      <nav className="navbar navbar-light bg-faded navbar-static-top">
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item active">
            <Button className="nav-link">Up</Button>
          </li>
          <li className="nav-item active">
            <Button className="nav-link" href="#">Down</Button>
          </li>
        </ul>
      </nav>

      <div className="container">
        <GridRow>
          <form>
            {this.props.children}
          </form>
        </GridRow>
      </div>

      </div>
    );
  }

  handleScroll(){
    var elements = document.getElementsByClassName('form-group');
    _.each(elements, (el) => {
      if(elementInViewport(el)){
        el.classList.add("visible");
      }else{
        el.classList.remove("visible");
      }
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }
}
