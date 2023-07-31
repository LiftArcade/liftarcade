<script lang="ts" context="module">
	import { cva, type VariantProps } from 'class-variance-authority';

	export const alphaLabelVariants = cva(
		'rounded px-1 uppercase tracking-wide text-[10px] font-bold p-px',
		{
			variants: {
				variant: {
					default: 'bg-transparent text-charge ring-charge ring-2'
				}
			},
			defaultVariants: {
				variant: 'default'
			}
		}
	);
</script>

<script lang="ts">
	export let variant: VariantProps<typeof alphaLabelVariants>['variant'] = 'default';
</script>

<span class={alphaLabelVariants({ variant })}>alpha</span>
