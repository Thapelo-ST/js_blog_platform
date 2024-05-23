import {Link} from 'react-router-dom';
import {useEffect} from 'react';

export default function Header() {
  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    })
  }, []);
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
