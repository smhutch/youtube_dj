import dispatcher from "../dispatcher";
import axios from 'axios';
var config = require('json!../../config.json');

export function searchYoutube(input) {
  
  var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&videoSyndicated=true&maxResults=10&order=relevance&q=" + input + "&type=video&key=" + config.youtube_key;
  
  dispatcher.dispatch({
    type:"CLEAR_SEARCH"
  });
  
  axios(url).then((data) => {
    var items = data.data.items
    for (var item of items) {
      
      var result = {
        id : item.id.videoId,
        title : item.snippet.title,
        image : item.snippet.thumbnails.high.url 
      }
      
      dispatcher.dispatch({
        type:"SEARCH",
        data:result
      });
      
    }
  })
}