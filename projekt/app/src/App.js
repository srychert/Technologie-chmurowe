import axios from 'axios';

function App() {
  // axios.get('/api').then(r => console.log(r)).catch(err => console.error(err))

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    const number = document.forms[0].number.value;

    await axios.post("/api/dividers", {
      number: parseInt(number)
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.error(error)
    })
  };


  return (
    <div className="App">
      Hello
      <div className="login-form">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Get dividers of:</label>
              <input type="number" name="number" required />
            </div>
            <div className="button-container">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
