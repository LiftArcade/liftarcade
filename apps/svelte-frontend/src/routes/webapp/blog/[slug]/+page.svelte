<script>
	export let data;
	import BlogHeader from '$lib/components/blog-header.svelte';

	const { slug, pretitle, title, excerpt, coverImage, createdAt, authors } = data.props.attributes;
</script>

<div
	class="mx-auto max-w-prose mt-12 prose prose-sm md:prose-lg prose-orange prose-gray dark:prose-invert px-4 sm:px-6 lg:px-8"
>
	<BlogHeader {slug} {createdAt} {pretitle} {title} {coverImage} {excerpt} {authors} />

	<div>
		{@html data.props.body}
	</div>
</div>
