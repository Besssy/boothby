import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Reserve from './Components/Reserve';
import Contact from './Components/Contact';
import './Styles/variables.scss';


class App extends Component {
  render() {
    return (
      <div className="content">
        <NavBar />
        <Header />
        <Home />
        <About />
        <Reserve />
        <Contact />
      </div>
    );
  }
}




export default App;
