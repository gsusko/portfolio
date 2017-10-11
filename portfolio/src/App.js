import React, { Component } from 'react';
import Portfolio from './portfolio.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Portfolio/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
