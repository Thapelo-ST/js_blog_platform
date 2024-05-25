import {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../Editor';


export default function EditPost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function updatePost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/update_post", {
      method: "POST",
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={updatePost}>
      <h1>Editing Post</h1>
      <input
        type="title"
        placeholder={"Title of your post"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary of your post"}
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "10px", marginBottom: "30px" }}>
        Create Post
      </button>
    </form>
  );
}