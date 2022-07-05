/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import PostList from "../components/PostList.tsx";
import { getPosts } from "../utils/posts.ts";

export const handler = {
  async GET(_, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function Home(props) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <PostList posts={props.data} />
      <footer class={tw`text-center`}>
        <img
          src="/fresh-logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>Built with Fresh</p>
      </footer>
    </div>
  );
}
