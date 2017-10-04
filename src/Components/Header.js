import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row } from 'reactstrap';
import About from './About';
import Home from './Home';
import '../Styles/main.scss';


class Header extends Component {
  render() {
    return (
      <Row>
        <div className="header d-flex justify-content-center align-items-center text-center">
          <div className="header-title">
            <h1 className="title-white"> Impress <br/> your guests</h1>
            <h1 className="title-red"> with our <br /> fantastic cocktails </h1>
          </div>
        </div>
      </Row>
    );
  }
}

export default Header;
