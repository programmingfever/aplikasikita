import React from 'react';
import logo from './logo.svg';
import './App.css';

function HelloWorld(){
  return <div style={{ backgroundColor: 'yellow'}}>Abdul Rozak</div>;
}
function Tombol(){
  return <button style={{ backgroundColor: 'lightcoral'}} onClick={() => alert('Selamat Datang')}>Klik</button>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <Tombol/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
