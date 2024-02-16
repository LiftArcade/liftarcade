<script>
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<div
	class={cn(containerVariants({ variant: 'centered-padded' }), 'flex flex-col max-w-prose gap-y-4')}
>
	<div class="text-zinc-50 text-5xl font-semibold leading-10 mt-24">Improving fitness.</div>
	<div class="flex items-center gap-2">
		<div class="w-8 h-8 justify-center items-center inline-flex">
			<img
				class="w-8 h-8 rounded-full border border-zinc-900 border-opacity-20"
				src="https://via.placeholder.com/32x32"
			/>
		</div>
		<div class="text-zinc-300 text-lg font-normal leading-10">by Bryce M.</div>
	</div>
	<hr class="h-px border border-zinc-600" />
	<div class="text-orange-200 text-sm font-medium leading-none">Nov 2, 2023</div>
	<div class="prose prose-lg text-zinc-300 mt-20">
		Lorem ipsum dolor sit amet consectetur. Proin mattis id sem rhoncus sem ante eleifend arcu
		tincidunt. Malesuada ac dui amet mattis metus gravida tortor. Orci etiam in lorem lectus sed
		venenatis risus dignissim. Enim eget lectus vitae volutpat ac at rutrum. Fringilla dui est
		egestas et praesent ornare metus justo consectetur. Purus mi venenatis odio faucibus nunc
		aliquam. Phasellus neque elit malesuada maecenas. Non arcu turpis nullam lacus et orci
		sollicitudin diam. Facilisis ante in a rhoncus quis augue nunc facilisis feugiat. Urna mollis
		nulla sed lobortis ullamcorper. Arcu ac enim donec scelerisque consectetur.<br /><br />Nunc
		pellentesque amet quis facilisis odio vivamus amet. A enim placerat pretium facilisis sit quis.
		Lobortis dignissim cras id mi. Pretium congue semper integer phasellus semper in ornare eget
		sed. Enim tristique dolor nunc enim pretium. Etiam sagittis morbi sollicitudin non aliquam.
		Viverra amet enim amet orci. Eget id at ac porta velit. Accumsan tincidunt quis sodales tortor.
		Eget nisl enim cursus feugiat accumsan facilisis id. Id dui pretium urna enim tellus tortor
		elementum iaculis. Tempus tortor blandit elementum eu.
	</div>
</div>

<style>
	:global(body) {
		@apply bg-zinc-900;
	}
</style>
