import {format} from 'date-fns';
import { Link } from 'react-router-dom';
export default function Post({_id, title, summary, cover, content, createdAt,author}) {
  return (
    <div class="entries">
      <div class="image">
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:5000/" + cover}
            alt="https://picsum.photos/1928/1360"
          />
        </Link>
      </div>
      <div class="contex">
        <Link to={`/post/${_id}`}>
          <h2> {title}</h2>
        </Link>
        <p class="info">
          <a class="author">{author.username}</a>
          <time>{format(new Date(createdAt), "MMM - d - YYY  HH:MM")}</time>
        </p>
        <p class="summary">{summary}</p>
      </div>
    </div>
  );
}