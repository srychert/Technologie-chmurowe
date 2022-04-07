import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    axios.get("http://localhost:9090/api/hello")
      .then(res => {
        console.log(res)
        setMsg(res.data.msg)
      })
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello from frontend!
        </p>
        <p>
          {msg}
        </p>
      </header>
    </div>
  );
}

export default App;
