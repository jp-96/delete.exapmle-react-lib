import React from 'react'
import Logo from './Logo';  // logo.svg ==> Log0.tsx
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>
          Edit <code>src/app/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - parcel.
        </a>
      </header>
    </div>
  );
}

export default App;
