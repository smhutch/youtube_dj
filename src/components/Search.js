import React from 'react';

import Result from './Result.js';
import * as SearchActions from "../actions/SearchActions.js";
import ResultStore from "../stores/ResultStore.js";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      results: ResultStore.getAll(),
    };
  }
  
  handleSearchInputChange(e) {
    this.setState({
      searchValue: e.target.value,
    });
  }
  
  handleSearchSubmit(e) {
    var searchValue = this.state.searchValue;
    SearchActions.searchYoutube(searchValue);
  }
  
  componentWillMount(){
    
    ResultStore.on("search_change", () => {
      this.setState({
        results: ResultStore.getAll(),
      });
    });
    
  }
  
  render() {
    const {results} = this.state;
    
    const results_list = results.map((result) => {
      return <Result
        key={result.id}
        {...result}
        />;
    });
    
    if (results.length === 0) {
      var search_explainer = 
        <div className="explainer">
          
          <div className="explainerArrow">
            ⬆️⬆️⬆️
          </div>
          
          <div className="explainerEmoji">
            <span>🎉</span>
            <span>😎</span>
            <span>🎉</span>
          </div>
          Search for a track to get started
        </div>;
    }
      
    return (
      <div className="search">
        <div className="container">
          
          <input
            type="text"
            placeholder="Search for something..."
            onChange={this.handleSearchInputChange.bind(this)}
          />
        <button onClick={this.handleSearchSubmit.bind(this)}>SEARCH</button>
          
          <div className="results">
            {search_explainer}
            {results_list}
          </div>
        
        </div>
      </div>
    );
  }
}