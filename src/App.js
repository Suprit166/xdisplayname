import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
  <div className="App">
  <form onSubmit={handleSubmit}>
    <h1>Full Name Display</h1>
    <div className='first'>
      <label>
        First Name:
        <input
        type='text'
        value={firstName}
        onChange={handleFirstNameChange}
        />
      </label>
    </div>
    <div className='last'>
      <label>
        Last Name:
        <input
        type='text'
        value={lastName}
        onChange={handleLastNameChange}
        />
      </label>
    </div>
    <button type='submit'>Submit</button>
  </form>

  {submitted && (
  <div>
    <h2>Full Name: {firstName} {lastName}</h2>
  </div>
  )}
  </div>
  );
}

export default App;
