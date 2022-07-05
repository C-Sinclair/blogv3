#!/usr/bin/env -S deno run -A

import { walk } from "fs";
import { Marked } from "markdown";

const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder("utf-8");

const posts = [];

for await (const entry of walk("/home/conor/Dropbox/notes/posts/")) {
  if (entry.isFile) {
    const markdown = decoder.decode(await Deno.readFile(entry.path));
    const markup = Marked.parse(markdown);

    const title = entry.path.split("/").pop().replace(".md", "");

    const slug = title.replace(/\s/g, "-").toLowerCase();

    posts.push({ ...markup, slug, title });
  }
}

console.log(`Found ${posts.length} posts`);

const data = encoder.encode(JSON.stringify(posts));
await Deno.writeFile("static/posts.json", data);

// TODO: Create RSS feed here
