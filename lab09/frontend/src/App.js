import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('http://localhost:31100')
      .then(response => {
        response.text().then(text => {
          console.log(text);
          setData(text);
        })
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Some h1</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Frontend - some changes here...
        {data}
      </header>
    </div>
  );
}

export default App;
