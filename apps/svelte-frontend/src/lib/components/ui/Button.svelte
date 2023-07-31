<script lang="ts" context="module">
	// Borrowing ( i mean its basically stealing ) from https://ui.shadcn.com/docs/components/button
	import { cva } from 'class-variance-authority';

	export const buttonVariants = cva(
		'inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-charge focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-surface',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-primary/90',
					destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
					outline: 'border border-border hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'underline-offset-4 hover:underline text-primary',
					navLink: ''
				},
				size: {
					sm: 'h-9 px-3 rounded-lg',
					default: 'h-10 py-2 px-4 rounded-xl',
					lg: 'h-11 px-8 rounded-2xl',
					'icon-sm': 'h-9 w-9 rounded-lg',
					icon: 'h-10 w-10 rounded-lg',
					'icon-lg': 'h-11 w-11 rounded-xl'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);
</script>
