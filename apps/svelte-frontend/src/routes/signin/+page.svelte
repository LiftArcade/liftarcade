<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import Logo from '$lib/assets/logo.svg';
	import { typographyVariants } from '$lib/components/ui/typography.svelte';

	import { Somerset } from 'somerset';
	import { cn } from '$lib/utils/cn';
	import { buttonVariants } from '$lib/components/ui/button.svelte';

	import FaApple from 'svelte-icons/fa/FaApple.svelte';
	import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte';
	import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte';

	const signInWithApple = () => signIn('apple', { callbackUrl: '/earlyaccess' });
	const signInWithGoogle = () => signIn('google');
	const signInWithFacebook = async () => {
		await signIn('facebook', { callbackUrl: '/dashboard' });
	};
</script>

<Somerset title="Early Access - LiftArcade" />

<div class="min-h-screen bg-background flex items-center justify-center">
	<div
		class="flex bg-white dark:bg-gray-900 py-8 px-4 md:px-8 shadow-2xl rounded-xl flex-col items-center w-full mx-4 max-w-sm"
	>
		<img class="h-12 w-12 dark:invert" src={Logo} alt="" />
		<h2 class="mt-6 text-xl font-semibold">Sign in for early access</h2>
		<p class={cn(typographyVariants({ variant: 'muted', color: 'muted' }), 'mt-1 text-center')}>
			Get started with your social accounts below
		</p>
		<hr class="border-muted w-full my-8" />
		<button
			class={cn(
				buttonVariants({ variant: 'default' }),
				'bg-black hover:bg-black/80 text-white w-full'
			)}
			on:click={signInWithApple}
		>
			<div class="h-5 w-5 mr-2">
				<FaApple />
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
				<FaGoogle />
			</div>
			Continue with Google</button
		>
		<button
			class={cn(
				buttonVariants({ variant: 'default' }),
				'bg-[#285195] hover:bg-[#285195]/80 text-white mt-4 w-full'
			)}
			on:click={signInWithFacebook}
			><div class="h-5 w-5 mr-2">
				<FaFacebookF />
			</div>
			Continue with Facebook</button
		>
		<p class={cn(typographyVariants({ variant: 'muted', color: 'muted' }), 'mt-6 text-center')}>
			By continuing with this login in, you agree to the <a
				href="/terms"
				class="underline hover:text-foreground">Terms of Service</a
			>
			and
			<a href="/privacy" class="underline hover:text-foreground">Privacy Policy</a>
		</p>
	</div>
</div>
