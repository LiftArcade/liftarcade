<script lang="ts" context="module">
	import { cva, type VariantProps } from 'class-variance-authority';

	export const avatarVariants = cva('flex items-center justify-center rounded-full bg-border', {
		variants: {
			size: {
				'16': 'h-4 w-4',
				'20': 'h-5 w-5',
				'24': 'h-6 w-6',
				'28': 'h-7 w-7',
				'32': 'h-8 w-8',
				'40': 'h-10 w-10',
				'48': 'h-12 w-12',
				'64': 'h-16 w-16'
			}
		},
		defaultVariants: {
			size: '32'
		}
	});
</script>

<script lang="ts">
	export let src = '';
	export let initial = '';
	export let size: VariantProps<typeof avatarVariants>['size'];

	import { createAvatar } from '@melt-ui/svelte';

	const { image, fallback } = createAvatar({
		src
	});
</script>

<div class={avatarVariants({ size })}>
	<img {...$image} alt="Avatar" class="h-full w-full rounded-[inherit]" />
	<span {...$fallback} class="text-sm font-medium">{initial}</span>
</div>
