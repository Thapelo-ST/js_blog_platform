import './App.css';
// import Post from "./post";
import { Helmet } from "react-helmet";
// import Header from "./header";
import {Route, Routes} from "react-router-dom";
import Layout from './layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import {UserContextProvider } from './UserContext';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactInfoPage';

function App() {
  return (
    <UserContextProvider>
      <Helmet>
        <title>Insights</title>
        {" Where you come to unwind "}
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
// <Route path="/delete/:id" element={<DeletePost />} />

export default App;
