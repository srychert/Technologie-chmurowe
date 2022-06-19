import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [dividers, setDividers] = useState([])

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    const number = document.forms[0].number.value;

    await axios.post("/api/dividers", {
      number: parseInt(number)
    }).then(response => {
      console.log(response)
      setDividers(response.data.dividers)
    }).catch(error => {
      console.error(error)
    })
  };


  return (
    <div className="App">
      <div className="login-form">
        <h3>Get list of dividers for:</h3>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Number</label>
            <input type="number" name="number" required />
            <button type="submit" class="button-1">Ok</button>
          </form>
        </div>
        <div className="dividers">
          <h3>{dividers && dividers.length !== 0 && JSON.stringify(dividers)}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
