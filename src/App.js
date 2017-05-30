import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header.jsx';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          name: 'Jimmy Skywalker',
          race: 'Hooman',
        },
        {
          name: 'Darth Barstool',
          race: 'Hooman',
        },
      ],
    };

  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
