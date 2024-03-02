import type { BlogPost } from '$lib/types/blog-post.js';
import fm from 'front-matter';
import { readFileSync } from 'node:fs';
import markdown from 'markdown-it';
// export const prerender = true;

export const load = async ({ params }) => {
	const slug = params.slug;
	const mdFile = readFileSync('_posts/' + slug + '.md', 'utf8');

	const frontmatter = fm<BlogPost>(mdFile);

	const body = markdown().render(frontmatter.body);

	return {
		attributes: {
			...frontmatter.attributes,
			slug
		},
		body
	};
};
