<script lang="ts">
	import type { BlogPost } from '$lib/types/blog-post';

	let { title, pretitle, excerpt, coverImage, authors, createdAt } = $props<BlogPost>();

	let formattedDate = new Date(createdAt || '').toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<div class="space-y-12">
	<div class="space-y-4">
		<div class="font-mono text-base font-bold uppercase text-blue-500 dark:text-orange-500">
			// {pretitle}
		</div>

		<h1 class="text-2xl font-bold leading-tight md:text-5xl">
			{title}
		</h1>

		{#if excerpt}
			<p class="text-base leading-relaxed md:text-xl">
				{excerpt}
			</p>
		{/if}
	</div>

	{#if coverImage}
		<div class="sm:mx-0">
			<img
				src={coverImage}
				alt={title ? `Cover Image ${title}` : 'Cover Image'}
				height={675}
				width={1200}
				class="block mt-9 rounded-md shadow-xl md:rounded-xl aspect-video object-cover object-center"
			/>
		</div>
	{/if}

	<div class="flex flex-col space-y-4">
		<div class="flex items-center justify-between text-sm md:text-base">
			<div class="flex items-center space-x-2">
				<div class="hidden sm:block">by:</div>
				{#if authors && authors.length > 0 && authors[0]}
					<div>
						{#if authors[0].picture}
							<img
								src={authors[0].picture}
								alt={authors[0].name}
								class="mr-2 inline-block h-10 w-10 rounded-full"
							/>
						{/if}
						<div>
							{authors[0].name}
						</div>
					</div>
				{/if}
			</div>

			<div class="text-sm md:text-base">
				Published:{' '}
				{formattedDate}
			</div>
		</div>
		<hr class="border-border relative top-px" />
	</div>
</div>
