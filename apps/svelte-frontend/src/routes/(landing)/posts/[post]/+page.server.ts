import fm from 'front-matter';
import { readFileSync } from 'node:fs';
import markdown from 'markdown-it';
// export const prerender = true;

export const load = async ({ params }) => {
	const slug = params.post;
	const mdFile = readFileSync('_posts/' + slug + '.md', 'utf-8');

	const frontmatter = fm(mdFile);

	const body = markdown().render(frontmatter.body);

	return {
		props: {
			attributes: {
				...frontmatter.attributes,
				slug
			},
			body
		}
	};
};
