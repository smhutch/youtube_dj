import dispatcher from "../dispatcher";

export function newVideo(deck, video) {
  
  var deckChange = {
    deck:deck,
    video: video
  }
  
  dispatcher.dispatch({
    type:"UPDATE_DECK",
    data:deckChange
  })
}

export function updateSlider(val) {
  dispatcher.dispatch({
    type:"UPDATE_VOLUME",
    data:val
  })
}