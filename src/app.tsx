import React from 'react';
import './App.css';
import { ServerStatus } from './server'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weee woooo
      </header>

      <ServerStatus
        address={"mc.herobrine.org"}
      />
    </div>
  );
}

export default App;

