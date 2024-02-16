// get the top 10 most recent blog posts

import fm from 'front-matter';
import { readdirSync, readFileSync } from 'node:fs';
// export const prerender = true;

export const load = async () => {
	const allofPosts = readdirSync('_posts/');

	// Get each posts metadata
	allofPosts.sort((postA, postB) => {
		const mdFileA = readFileSync('_posts/' + postA, 'utf-8');
		const mdFileB = readFileSync('_posts/' + postB, 'utf-8');
		const dateA = fm(mdFileA).attributes?.createdAt;
		const dateB = fm(mdFileB).attributes?.createdAt;
		console.debug(dateA, dateB);
		if (!dateA && !dateB) throw new Error("Couldn't find createdAt in frontmatter");
		return new Date(dateB).getTime() - new Date(dateA).getTime();
	});

	const detailedPosts = allofPosts.map((post) => {
		const mdFile = readFileSync('_posts/' + post, 'utf-8');
		const attributes = fm(mdFile).attributes;
		return {
			...attributes,
			slug: post.substring(0, post.indexOf('.'))
		};
	});
	console.log(allofPosts);
	return {
		posts: detailedPosts
	};
};
