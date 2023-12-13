<script context="module" lang="ts">
	import { cva, type VariantProps } from 'class-variance-authority';

	export const containerVariants = cva('', {
		variants: {
			variant: {
				'full-padded': 'px-4 sm:px-6 lg:px-8',
				'centered-padded': 'mx-auto max-w-7xl sm:px-6 lg:px-8 px-4'
			}
		}
	});
</script>

<script lang="ts">
	export let variant: VariantProps<typeof containerVariants>['variant'] = 'full-padded';
</script>

<div class={containerVariants({ variant })}>
	<slot />
</div>
