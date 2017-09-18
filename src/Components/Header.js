import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row } from 'reactstrap';
import About from './About';
import Home from './Home';
import '../Styles/main.scss';


class Header extends Component {
	constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      isOpen: false
	    };
	}
	toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	}
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Bouthby</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
               <NavItem>
                <NavLink href="#">Reserve</NavLink>
              </NavItem>
               <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="header">
          <div className="header-title text-center">
            <h1 className="display-3 title-white"> Impress <br/> your guests</h1>
            <h1 className="display-3 title-red"> with our <br /> fantastic cocktails </h1>
          </div>
        </div>
      </div>
    );
  }
}




export default Header;
