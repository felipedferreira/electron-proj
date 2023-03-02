import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://aet/Document/someid" target="_self" rel="noopener noreferrer">
          target=self Special Link
        </a>
        <a className="App-link" href="https://www.google.com" target="_self" rel="noopener noreferrer">
          Google Link
        </a>
      </header>
    </div>
  );
}

export default App;
