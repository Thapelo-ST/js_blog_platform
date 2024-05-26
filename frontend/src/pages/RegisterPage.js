import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from "react-helmet";


export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function registerUser(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({ username, password }),
    })
    if (response.status === 200) {
      alert('Registration Succcessful. Proceed to login');
    } else {
      alert('Registration failed. Please use another username');
    }
  }

  return (
    <form action="" className="register" onSubmit={registerUser}>
      <Helmet>
        <title>Register - Insights</title>
      </Helmet>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="pasword"
        placeholder="Enter your password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button type="submit">Register</button>
      <p className="acc-Q">
        Already have an account? <br></br> <Link to="/login">Log In Here</Link>{" "}
      </p>
    </form>
  );
}