<script lang="ts">
	import Logo from '$lib/assets/logo.svg';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';

	import { cn } from '$lib/utils/cn';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
</script>

<div class="bg-background flex items-center justify-center h-full">
	<div class="flex py-8 px-4 md:px-8 flex-col items-center w-full mx-4 max-w-sm">
		<img class="h-12 w-12 dark:invert" src={Logo} alt="" />
		<h2 class="mt-6 text-xl font-semibold">Sign in for early access</h2>
		<p class={cn(typographyVariants({ variant: 'muted', color: 'muted' }), 'mt-1 text-center')}>
			Get started with your social accounts below
		</p>
		<hr class="border-muted w-full my-5" />
		<!-- <button
			class={cn(
				buttonVariants({ variant: 'default' }),
				'bg-black hover:bg-black/80 text-white w-full'
			)}
			on:click={signInWithApple}
		>
			<div class="h-5 w-5 mr-2">
				<Apple />
			</div>
			Continue with Apple</button
		>
		<button
			class={cn(
				buttonVariants({ variant: 'default' }),
				'bg-[#4285F4] hover:bg-[#4285F4]/80 text-white mt-4 w-full'
			)}
			on:click={signInWithGoogle}
		>
			<div class="h-5 w-5 mr-2">
				<Facebook />
			</div>
			Continue with Google</button
		> -->
		<a
			href="/api/auth/facebook"
			class={cn(
				buttonVariants({ variant: 'default' }),
				'bg-[#285195] hover:bg-[#285195]/80 text-white w-full'
			)}
		>
			Continue with Facebook</a
		>
		<p class={cn(typographyVariants({ variant: 'muted', color: 'muted' }), 'mt-6 text-center')}>
			By continuing with this login in, you agree to the <a
				href="/terms"
				class="underline hover:text-text">Terms of Service</a
			>
			and
			<a href="/privacy" class="underline hover:text-text">Privacy Policy</a>
		</p>
	</div>
</div>
