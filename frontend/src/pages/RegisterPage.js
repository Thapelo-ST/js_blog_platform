import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div class="pages">
      <form action="" class="register">
        <h1>Register</h1>
        <input type="text" placeholder="username" />
        <input type="pasword" placeholder="password" />
        <button type="submit">Register</button>
        <p class="acc-Q">Already have an account? <br></br> <Link to="/login">Log In Here</Link> </p>
      </form>
    </div>
  );
}