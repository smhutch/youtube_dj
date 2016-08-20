import React from 'react';

import * as DeckActions from "../actions/DeckActions.js";

export default class Result extends React.Component {
  
  handleVideoSelection(e) {
    var data = e.target.dataset;
    var deck = data.deck;
    var video = data.video;
    DeckActions.newVideo(deck, video);
  }
  
  render() {
    var result = this.props;
    var resultStyle = {
      backgroundImage: 'url(' + result.image + ')',
    };
    
    return (
      <div id={result.id} className="result" style={resultStyle}>
        <div className="resultOverlay">
          <p>
            {result.title}
          </p>
          <div className="buttons">
            <button
                onClick={this.handleVideoSelection}
                className="loadLeftButton"
                data-video={result.id}
                data-deck="left">
              Load Left
            </button>
            <button
              onClick={this.handleVideoSelection}
              className="loadRightButton"
              data-video={result.id}
              data-deck="right">
              Load Right
            </button>
          </div>
        </div>
      </div>
    );
  }
}