import React, { Component } from 'react'
import './App.css';
import Routes from './Routes'
import TopNavigationBar from './components/TopNavigationBar'


class App extends Component {
  render() {
    return (
      <div>
        <TopNavigationBar />
        <Routes />
      </div>
    )
  }
}

export default App;
