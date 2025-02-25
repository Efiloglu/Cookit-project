import React, { Component } from 'react';
import EpicMenu from './EpicMenu';
import "./App.css"
import logo from './cookit.png';


class App extends Component {

  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Cookit', link: '#cookit' },
      { label: 'Contact Us', link: '#contact-us' },
     
    ];
 
    return (
      
      <div className="container center">
        <EpicMenu links={links} logo={logo} />
      </div>
      
    );
  }
}

export default App;
