<script lang="ts">
	// Data to be filtered
	export let data: {
		name: string;
	}[] = [];

	// Handle selected item functions
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	export let handleSelected = (selected: (typeof data)[0]) => {};
	// Search query
	export let query = '';

	$: filteredData = query
		? data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
		: data;
</script>

<div class="relative mt-1">
	<input
		class="rounded-md bg-gray-100 focus:bg-gray-50 px-4 py-2 w-full dark:bg-gray-900 dark:border-gray-800"
		autocomplete="off"
		type="text"
		placeholder="Search for an exercise"
		bind:value={query}
	/>

	{#if query !== ''}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul
			class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-all-scroll"
		>
			{#if filteredData.length === 0 && query !== ''}
				<div class="relative cursor-default select-none py-2 px-4 text-gray-700">
					Nothing found.
				</div>
			{:else if filteredData.length > 0}
				{#each filteredData as exercise}
					<li
						class="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-gray-100"
						on:mousedown={() => handleSelected(exercise)}
					>
						{exercise.name}
					</li>
				{/each}
			{/if}
		</ul>
	{/if}
</div>
