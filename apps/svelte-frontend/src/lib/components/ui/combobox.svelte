<script lang="ts">
	// Data to be filtered
	import { createCombobox, melt } from '@melt-ui/svelte';
	import { exercises } from '@liftarcade/exercises-lib';
	import Fuse from 'fuse.js';

	let {
		handleSelected = (selected) => {
			console.log(selected);
		}
	}: {
		handleSelected: () => void;
	} = $props();

	const {
		elements: { menu, input, option, label },
		states: { open, inputValue, touchedInput },
		helpers: { isSelected }
	} = createCombobox({
		onSelectedChange: ({ next }) => {
			console.log(next);
			handleSelected(next.value);
		}
	});

	const fuse = new Fuse(exercises.exercises, {
		keys: ['name']
	});

	let filteredData = $derived($touchedInput ? fuse.search($inputValue) : fuse.search('^'));
</script>

<div class="relative mt-1">
	<input
		class="rounded-md bg-gray-100 focus:bg-gray-50 px-4 py-2 w-full dark:bg-gray-900 dark:border-gray-800"
		autocomplete="off"
		type="text"
		placeholder="Search for an exercise"
		use:melt={$input}
	/>

	{#if $open && filteredData.length > 0}
		<ul
			class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-all-scroll"
			use:melt={$menu}
		>
			{#if filteredData.length === 0}
				<div class="relative cursor-default select-none py-2 px-4 text-gray-700">
					Nothing found.
				</div>
			{:else if filteredData.length > 0}
				{#each filteredData as exercise}
					<li
						class="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-gray-100 data-[highlighted]:bg-gray-200 data-[highlighted]:text-gray-900
						data-[disabled]:opacity-50"
						use:melt={$option({
							value: exercise.item,
							label: exercise.item.name
						})}
					>
						{exercise.item.name}
					</li>
				{/each}
			{/if}
		</ul>
	{/if}
</div>
