<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	/** Internal helpers */
	// import { flyAndScale } from '$docs/utils';
	import { XMark } from 'svelte-heros';
	import { ChatBubbleLeftRight } from 'svelte-heros';

	const feedbackModalBuilder = createDialog();
	export const { trigger, portal, overlay, content, title, description, close, open } =
		feedbackModalBuilder;
</script>

<button
	{...$trigger}
	use:trigger
	class="flex items-center text-sm text-text-muted space-x-2 font-medium hover:text-text rounded-lg px-3 py-1 active:opacity-90"
>
	<ChatBubbleLeftRight tabindex="-1" variation="outline" class="h-5 w-5" />
	<div>Feedback</div>
</button>
<div use:portal>
	{#if $open}
		<div {...$overlay} class="fixed inset-0 z-40 bg-black/50" />
		<div
			class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px]
              translate-x-[-50%] translate-y-[-50%] rounded-lg bg-surface p-[25px]
              border border-border
              shadow-lg"
			{...$content}
			use:content
		>
			<h2 {...$title} class="m-0 text-lg font-medium text-black">Feedback</h2>
			<p {...$description} class="mb-5 mt-[10px] leading-normal text-zinc-600">
				Any advice you have is welcome. I am always looking for ways to improve.
			</p>

			<fieldset class="mb-4 flex items-center gap-5">
				<label class="w-[90px] text-right text-magnum-800" for="name"> Name </label>
				<input
					class="inline-flex h-8 w-full flex-1 items-center justify-center
                      rounded-sm border border-solid px-3 leading-none text-magnum-800"
					id="name"
					value="Thomas G. Lopes"
				/>
			</fieldset>
			<fieldset class="mb-4 flex items-center gap-5">
				<label class="w-[90px] text-right text-magnum-800" for="username"> Username </label>
				<input
					class="inline-flex h-8 w-full flex-1 items-center justify-center
                      rounded-sm border border-solid px-3 leading-none text-magnum-800"
					id="username"
					value="@thomasglopes"
				/>
			</fieldset>
			<div class="mt-[25px] flex gap-4">
				<label for="analytics" class="ml-[10px] text-magnum-800"
					><input type="checkbox" name="analytics" />Include debug information?
				</label>
				<button
					{...$close}
					use:close
					class="inline-flex h-[35px] items-center justify-center rounded-[4px]
                      bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
				>
					Cancel
				</button>
				<button
					{...$close}
					use:close
					class="inline-flex h-[35px] items-center justify-center rounded-[4px]
                      bg-magnum-100 px-4 font-medium leading-none text-magnum-900"
				>
					Save changes
				</button>
			</div>

			<button
				{...$close}
				use:close
				class="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px]
                  appearance-none items-center justify-center rounded-full text-magnum-800
                  hover:bg-magnum-100 focus:shadow-magnum-400"
			>
				<XMark />
			</button>
		</div>
	{/if}
</div>
