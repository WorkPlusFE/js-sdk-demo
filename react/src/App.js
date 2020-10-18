import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import * as w6s from '@w6s/sdk';

import './App.css';

w6s.header.setTitle('JS-SDK ReactJS Demo');

function App() {
  const [device, setDeviceInfo] = useState('123');
  useEffect(() => {
    w6s.device.getDeviceInfo()
      .then(res => {
        setDeviceInfo(JSON.stringify(res.result, null, 4));
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h3>设备信息：</h3>
      <p>{device}</p>
    </div>
  );
}

export default App;
