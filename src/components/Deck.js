import React from 'react';
import ReactPlayer from 'react-player';

export default class Deck extends React.Component {
  
  constructor() {
    super();
    this.state = {
      volume:0.5,
    };
    this.config = {
      "playerVars": {
        "fs":"0",
        "disablekb":"1",
        "modestbranding":"1",
        "playsinline":"1",
        "showinfo":"1"
      }
    }
  }
  
  render() {
    
    const volume = this.props.volume;
    return (
      
      <div className="deck">
        
        <ReactPlayer
          id={this.props.side}
          url={"https://www.youtube.com/watch?v=" + this.props.video}
          width="100%"
          height="400px"
          volume={volume}
          controls={true}
          youtubeConfig={this.config}
        />
    
      </div>
    );
  }

}
