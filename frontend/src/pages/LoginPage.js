import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function loginUser(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });

    if (response.ok) {
      alert('Login Successful');
      setRedirect(true);
    } else {
      alert('Wrong Username or password');
    }
  }

if (redirect) {
  return <Navigate to={"/"} />
}

  return (
    <form action="" className="login" onSubmit={loginUser}>
      <h1>Login</h1>
      <input type="text" placeholder="Enter your username"
        value={username} onChange={ev => setUsername(ev.target.value)} />
      <input type="password" placeholder="Enter your password"
        value={password} onChange={ev => setPassword(ev.target.value)} />
      <button type="submit">LOGIN</button>
      <p class="acc-Q">Don't have an account? <br></br> <Link to="/register">Register Here</Link> </p>
    </form>
  );
}