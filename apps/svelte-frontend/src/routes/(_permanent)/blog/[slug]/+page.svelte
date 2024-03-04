<script lang="ts">
	export let data;

	const { pretitle, title, excerpt, createdAt, authors } = data.attributes;
	let formattedDate = new Date(createdAt || '').toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<div class="mx-auto py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
	<div
		class="max-w-prose prose prose-sm md:prose-lg prose-orange prose-gray dark:prose-invert mx-auto"
	>
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
		</div>
	</div>
</div>
<div
	class="mx-auto max-w-prose mt-12 prose prose-sm md:prose-lg prose-orange prose-gray dark:prose-invert px-4 sm:px-6 lg:px-8"
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html data.body}
</div>
