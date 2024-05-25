import {format} from 'date-fns';
import { Link } from 'react-router-dom';
export default function Post({_id, title, summary, cover, content, createdAt,author}) {
  return (
    <div className="entries">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:5000/" + cover}
            alt="https://picsum.photos/1928/1360"
          />
        </Link>
      </div>
      <div className="contex">
        <Link to={`/post/${_id}`}>
          <h2> {title}</h2>
        </Link>
        <p className="info">
          <a className="author">By {author.username}</a>
          <time>on {format(new Date(createdAt), "MMM-d-YYY HH:MM")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}