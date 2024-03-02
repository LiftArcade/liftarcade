<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { createDialog } from '@melt-ui/svelte';
	/** Internal helpers */
	// import { flyAndScale } from '$docs/utils';
	import { X } from 'lucide-svelte';
	import { MessageSquareIcon } from 'lucide-svelte';
	import { buttonVariants } from './button.svelte';

	export const {
		elements: { trigger, portalled, overlay, content, title, description, close },
		states: { open }
	} = createDialog();
</script>

<button
	{...$trigger}
	use:trigger
	class="flex items-center text-sm text-text-muted space-x-2 font-medium hover:text-text rounded-lg px-3 py-1 active:opacity-90"
>
	<MessageSquareIcon tabindex={-1} class="h-5 w-5" />
	<div>Feedback</div>
</button>
<div use:portalled>
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
			<h2 {...$title} class="m-0 text-lg font-medium text-text">Feedback</h2>
			<p {...$description} class="mb-5 mt-[10px] leading-normal text-text-muted">
				Any advice you have is welcome. I am always looking for ways to improve.
			</p>

			<fieldset class="mb-4 items-center">
				<label class="text-text-muted" for="comments"> Comments </label>
				<textarea
					class="w-full flex-1 items-center justify-center font-mono mt-2
                      rounded border border-solid border-border focus:outline-none focus:ring-2 focus:ring-charge focus:ring-offset-2 focus:ring-offset-surface p-3 leading-none bg-surface"
					id="name"
				/>
			</fieldset>
			<div class="mt-[25px] flex gap-4">
				<button {...$close} use:close class={cn(buttonVariants({ variant: 'ghost' }), 'flex-1')}>
					Send Feedback
				</button>
			</div>

			<button
				{...$close}
				use:close
				class="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px]
                  appearance-none items-center justify-center rounded-full text-magnum-800
                  hover:bg-magnum-100 focus:shadow-magnum-400"
			>
				<X />
			</button>
		</div>
	{/if}
</div>
