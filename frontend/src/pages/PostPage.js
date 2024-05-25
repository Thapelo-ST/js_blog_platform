import { useEffect, useState, useContext } from 'react';
import{useParams} from 'react-router-dom';
import { formatISO9075 } from "date-fns";
import { UserContext } from '../UserContext';
import { Link } from "react-router-dom";

export default function PostPage() {
  const {id} = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  useEffect(() =>{
    // console.log(id);
    fetch(`http://localhost:5000/posts/${id}`).then(response => {
      response.json().then(postInfo => {
      setPostInfo(postInfo);
      });
    });
  }, []);
  if (!postInfo) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="postPage">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">written by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="editRow">
          <Link className="edit-button" to={`/edit/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>{" "}
            Edit
          </Link>
          <br></br>
          <Link className="delete-button" href={`/delete/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </Link>
        </div>
      )}
      <div className="image">
        <img src={`http://localhost:5000/${postInfo.cover}`} alt="" />
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
