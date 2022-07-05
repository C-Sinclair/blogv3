import { HandlerContext } from "$fresh/server.ts";
import { getPosts } from "../../utils/posts.ts";

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  const body = JSON.stringify({
    posts: await getPosts(),
  });
  return new Response(body);
};
