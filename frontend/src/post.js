import {format} from 'date-fns';
export default function Post({title, summary, cover, content, createdAt,author}) {
  return (
    <div class="entries">
      <div class="image">
        <img
          src={"http://localhost:5000/" + cover}
          alt="https://picsum.photos/1928/1360"
        />
      </div>
      <div class="contex">
        <h2> {title}</h2>
        <p class="info">
          <a class="author">{author.username}</a>
          <time>{format(new Date(createdAt), "MMM - d - YYY  HH:MM")}</time>
        </p>
        <p class="summary">{summary}</p>
      </div>
    </div>
  );
}