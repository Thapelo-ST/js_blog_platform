import {Link} from 'react-router-dom';
import {useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { Helmet } from "react-helmet";



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
      <Helmet>
        <title>Home - Insights</title>
      </Helmet>
      <Link to="/" className="logo">
        Insights
      </Link>
      <nav>
        {username && (
          <>
          <span>{username}</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Info</Link>
            <Link to="/create">
              Create <br></br> Post
            </Link>
            <button onClick={logout} className="logout-button">
              Sign Out
            </button>
          </>
        )}
        {!username && (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Info</Link>
            <Link to="/login">Sign In</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
// <Link to="/profile">Profile</Link>
