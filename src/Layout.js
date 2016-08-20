import React, { Component } from 'react';
import './index.css';
import './normalize.css';

import Decks from './components/Decks.js'
import Footer from './components/Footer.js'
import Search from './components/Search.js'
import Slider from './components/Slider.js'

class App extends Component {
  
  render() {
    return (
      <div className="App">
    
        <Decks />
       
       <Slider />
       
        <Search/>
        
        <Footer />
      </div>
    );
  }
}

export default App;
