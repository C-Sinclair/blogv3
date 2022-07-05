export interface Post {
  slug: string;
  content: string;
  meta: Record<string, string>;
}

const decoder = new TextDecoder("utf-8");

export async function getPosts(): Promise<Post[]> {
  const posts = await Deno.readFile("static/posts.json");
  const data = decoder.decode(posts);
  return JSON.parse(data);
}

export async function getPost(slug: string): Promise<Post> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}
