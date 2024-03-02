// get the top 10 most recent blog posts

import type { BlogPost } from '$lib/types/blog-post';
import fm from 'front-matter';
import { readdirSync, readFileSync } from 'node:fs';
// export const prerender = true;

export const load = async () => {
	const allofPosts = readdirSync('_posts/');

	// Get each posts metadata
	allofPosts.sort((postA, postB) => {
		const mdFileA = readFileSync('_posts/' + postA, 'utf8');
		const mdFileB = readFileSync('_posts/' + postB, 'utf8');
		const dateA = fm<BlogPost>(mdFileA).attributes?.createdAt;
		const dateB = fm<BlogPost>(mdFileB).attributes?.createdAt;
		console.debug(dateA, dateB);
		if (!dateA && !dateB) throw new Error("Couldn't find createdAt in frontmatter");
		return new Date(dateB).getTime() - new Date(dateA).getTime();
	});

	const detailedPosts = allofPosts.map((post) => {
		const mdFile = readFileSync('_posts/' + post, 'utf8');
		const attributes = fm<BlogPost>(mdFile).attributes;
		return {
			...attributes,
			slug: post.slice(0, Math.max(0, post.indexOf('.')))
		};
	});
	return {
		posts: detailedPosts
	};
};
