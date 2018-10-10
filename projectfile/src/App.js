import React, { Component } from 'react';
import AppList from './posts/AppList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<AppList />
		
      </div>
    );
  }
}

export default App;
