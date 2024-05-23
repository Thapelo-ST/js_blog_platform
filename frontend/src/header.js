import {Link} from 'react-router-dom';
import {useEffect, useState, useContext } from 'react';
import { UserContext } from './UserContext';


export default function Header() {
  // const [username, setUsername] = useState(null);
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    })
  }, []);

  const username = userInfo?.username;

  function logout() {
    fetch('http://localhost:5000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }


  return (
    <header>
      <Link to="/" className="logo">Javascript Blog</Link>
      <nav>
        {username &&(
          <>
          <Link to="/profile">Profile</Link>
          <Link to="/create">Create New Post</Link>
          <button onClick={logout} className="logout-button">Sign Out</button>
          </>
        )}
        {!username && (
          <>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
