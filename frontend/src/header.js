import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" class="logo">Javascript Blog</Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
