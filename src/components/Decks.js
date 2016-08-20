import React from 'react';
import Deck from './Deck.js'

import DeckStore from "../stores/DeckStore.js";

export default class Decks extends React.Component {
  constructor() {
    super();
    this.state = {
      decks:DeckStore.getDecks(),
    };
  }
  
  componentWillMount(){
    
    DeckStore.on("new_deck", () => {
      this.setState({
        decks: DeckStore.getDecks(),
      });
    });
    
    DeckStore.on("new_volume", () => {  
      this.setState({
        decks: DeckStore.getDecks(),
      });
    });
  }
  
  render() {
    return (
      <div className="decks">
        <Deck side="left" volume={this.state.decks.leftVol} video={this.state.decks.leftId} />
        <Deck side="right" volume={this.state.decks.rightVol} video={this.state.decks.rightId} />
      </div>
    );
  }
}
