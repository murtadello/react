import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcom from './components/Welcome'
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroname="Lee">
        <p>This is Children props</p>
      </Greet>
      <Greet name="Medhani"  heroname="Tesfasgi">
        <button>Action</button>
      </Greet>
    </div>
  );
}
export default App