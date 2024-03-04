<script>
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';

	export let data;
</script>

<div class={cn(containerVariants({ variant: 'centered-padded' }))}>
	<div class="hero">
		<p class="supratitle">// Blog</p>
		<h1>A collection of posts around fitness.</h1>
		<div class="description">
			<p>The latest posts about exercise, workouts, and fitness from the Status team.</p>
		</div>
	</div>

	<div>Selector</div>
	<div
		class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each data.posts as post}
			<article class="flex flex-col items-start justify-between">
				<div class="relative w-full">
					<img
						src={post.coverImage}
						alt=""
						class="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
					/>
					<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
				</div>
				<div class="max-w-xl">
					<div class="mt-8 flex items-center gap-x-4 text-xs">
						<div class="text-mono text-xs uppercase font-bold text-charge">// {post.pretitle}</div>
					</div>
					<div class="group relative">
						<h3
							class="mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-gray-50"
						>
							<a href={`/blog/${post.slug}`}>
								<span class="absolute inset-0" />
								{post.title}
							</a>
						</h3>
						<p class="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
							{post.excerpt}
						</p>
					</div>
					<div class="relative mt-4 flex items-center gap-x-2 text-sm">
						<img
							src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
							class="h-6 w-6 rounded-full bg-gray-100"
						/>
						<div class=" font-medium text-gray-900">{post.authors[0].name}</div>
						<time datetime="2020-03-16" class="text-gray-500">Mar 16, 2020</time>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>

<style lang="postcss">
	.hero {
		@apply py-32 space-y-2;
	}

	.supratitle {
		@apply text-sm text-charge font-mono uppercase font-bold;
	}

	h1 {
		@apply font-semibold text-4xl tracking-tight;
	}

	.description {
		@apply text-gray-500 text-base;
	}
</style>
