<script lang="ts" context="module">
	import { cva, type VariantProps } from 'class-variance-authority';

	const proLabelVariants = cva('rounded-full px-3 py-1 text-medium', {
		variants: {
			variant: {
				default: 'bg-asphalt text-white',
				dark: 'bg-gray-800 text-white'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});
</script>

<script lang="ts">
	export let variant: VariantProps<typeof proLabelVariants>['variant'] = 'default';
</script>

<span class={proLabelVariants({ variant })}>Pro</span>
