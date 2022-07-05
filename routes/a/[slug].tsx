/** @jsx h */
import { h } from "preact";
import { getPost } from "../../utils/posts.ts";
import { PageProps } from "$fresh/server.ts";

export const handler = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
    return ctx.render(post);
  },
};

export default function Post(props: PageProps) {
  const post = props.data;
  return (
    <div>
      <span dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
