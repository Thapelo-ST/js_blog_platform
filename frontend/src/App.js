import './App.css';
import Post from "./post"
import Header from "./header"
import {Route, Routes} from "react-router-dom";
import Layout from './layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import {UserContextProvider } from './UserContext';
import PostPage from './pages/PostPage';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
