import fm from 'front-matter';
import { readFileSync } from 'fs';
import markdown from 'markdown-it';
export const prerender = true;

export const load = async ({ params }) => {
	const slug = params.slug;
	const mdFile = readFileSync('_posts/' + slug + '.md', 'utf8');

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
