/** @jsx h */
import { h } from "preact";

/**
 * @returns {JSX.Element} List of posts rendered from static markdown
 */
export default function PostList({ posts }) {
  return (
    <ol>
      {posts?.map((post) => (
        <li>
          <a href={`/a/${post.slug}`}>{post.title}</a>
        </li>
      ))}
    </ol>
  );
}
