import {Link} from 'react-router-dom';
import {useEffect, useState } from 'react';


export default function Header() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUsername(userInfo.username);
      });
    })
  }, []);

  function logout() {
    fetch('http://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST',
    })
  }


  return (
    <header>
      <Link to="/" class="logo">Javascript Blog</Link>
      <nav>
        {username &&(
          <>
          <Link to="/profile">Profile</Link>
          <Link to="/create">Create New Post</Link>
          <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
