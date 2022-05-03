import './App.css';
import Captcha from './components/Captcha';
import Upload from './components/Upload';
import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);
  // console.log(token);

  return (
    <div className="App">
      <br />
      <Upload token={token}/>
      <br />
      <br />
      <Captcha token={token} setToken={setToken} />
    </div>
  );
}

export default App;
