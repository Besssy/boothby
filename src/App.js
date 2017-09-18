import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Reserve from './Components/Reserve';
import './Styles/variables.scss';


class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Home />
        <About />
        <Reserve />
      </div>
    );
  }
}




export default App;
