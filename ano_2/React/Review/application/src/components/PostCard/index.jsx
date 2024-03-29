import "./styles.css";

export const PostCard = ({ cover, title, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post__content">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};
