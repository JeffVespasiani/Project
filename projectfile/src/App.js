import React, { Component } from 'react';
import AppList from './posts/AppList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  <h1>Welcome to the App Store List!</h1>
	  <p>Click a title to learn more about it.</p>
		<AppList />
		
      </div>
    );
  }
}

export default App;
