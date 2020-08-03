import React from 'react';
import './App.css';
import { ServerStatus } from './server'

function App() {
  const params = new URLSearchParams(window.location.search);
  const ip = params.get('ip');

  return (
    <div className="App">
      <a href={process.env.PUBLIC_URL}>Home</a>

      <form>
        <label>
          Server IP: <input type="text" name="ip" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {ip && <ServerStatus
        address={ip}
      />}

    </div>
  );
}

export default App;

