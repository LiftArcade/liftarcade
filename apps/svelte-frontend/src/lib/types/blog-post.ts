import type { BlogAuthor } from './blog-author';
import type { BlogOgImage } from './blog-og-image';

export type BlogPost = {
	pretitle?: string;
	title: string;
	excerpt?: string;
	coverImage?: string;
	createdAt: string;
	updatedAt?: string;
	authors: BlogAuthor[];
	ogImage?: BlogOgImage[];
	lastmod?: string;
	type?: string;
	tags?: string[];
};
