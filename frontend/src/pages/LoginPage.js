import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <form action="" class="login">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Login</button>
        <p class="acc-Q">Don't have an account? <br></br> <Link to="/register">Register Here</Link> </p>
      </form>
    </div>
  );
}