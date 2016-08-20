import { EventEmitter } from "events";

import dispatcher from "../dispatcher.js"

class ResultStore extends EventEmitter {
  constructor() {
    super();
    this.results = [];
    this.decks = {
      left:'',
      right:''
    };
  }
  
  clearSearch() {
    this.results.length = [];
  }
  
  search(data) {
    this.results.push({
      id:data.id,
      title:data.title,
      image:data.image,
    });
    this.emit("search_change");
  }
  
  getAll() {
    return this.results;
  }
  
  handleAction(action) {
    switch(action.type) {
      case "SEARCH": {
        this.search(action.data);
        break
      }
      case "CLEAR_SEARCH": {
        this.clearSearch();
        break
      }
      default:
    } 
  }
}

const resultStore = new ResultStore();
dispatcher.register(resultStore.handleAction.bind(resultStore));
export default resultStore;