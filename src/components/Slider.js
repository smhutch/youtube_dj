import React from 'react';
import '../slider.css';

import * as DeckActions from "../actions/DeckActions.js";

export default class Slider extends React.Component {
  moveRange(e) {
    DeckActions.updateSlider(e.target.value);
  }
  
  render() {
    return (
      <div className="slider">
        <div className="container">
          <input
            onChange={this.moveRange.bind(this)}
            type="range" 
            min="0" 
            max="100"/>
        </div>
      </div>
    );
  }
}