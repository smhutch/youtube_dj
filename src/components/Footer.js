import React from 'react';

import logo from '../logo.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <img src={logo} role="presentation" className="logo"/>
          Made by <a href="https://www.smhutch.co.uk">SMHutch</a>
        </div>
      </div>
    );
  }
}