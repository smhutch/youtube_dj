import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js";

class DeckStore extends EventEmitter {
  constructor() {
    super();
    this.decks = {
      leftId:'00ttX5m7eB8',
      rightId:'rmKwdzUMcws',
      leftVol:0.5,
      rightVol:0.5,
    };
  }
  
  updateVolume(data) {
    data = parseInt(data, 10) / 100;
    var leftVol = 1 - data;
    this.decks.leftVol = leftVol;
    this.decks.rightVol = data;
    this.emit("new_volume");
  }
  
  updateDeck(data) {
    if (data.deck === 'right') {
      this.decks.rightId = data.video
    } else {
      this.decks.leftId = data.video
    }
    this.emit("new_deck");
  }
  
  getDecks() {
    return this.decks;
  }
  
  handleAction(action) {
    switch(action.type) {
      case "UPDATE_DECK": {
        this.updateDeck(action.data);
        break
      }
      case "UPDATE_VOLUME": {
        this.updateVolume(action.data);
        break
      }
      default:
    }
  }
}

const deckStore = new DeckStore();
dispatcher.register(deckStore.handleAction.bind(deckStore));
export default deckStore;