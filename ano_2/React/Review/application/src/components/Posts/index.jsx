import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            cover={post.cover}
            title={post.title}
            id={post.id}
            body={post.body}
          />
        );
      })}
    </>
  );
};
