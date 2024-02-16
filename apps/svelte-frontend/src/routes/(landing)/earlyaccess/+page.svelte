<script>
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { buttonVariants } from '$lib/components/ui/button.svelte';
	import { containerVariants } from '$lib/components/ui/container.svelte';
	import { cn } from '$lib/utils/cn';
</script>

<div class={cn(containerVariants({ variant: 'centered-padded' }), 'pt-8')}>
	<a href="/" class={cn(buttonVariants({ variant: 'link' }), 'text-white')}>&larr; Cancel</a>
</div>

<div class="flex flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img class="mx-auto h-10 w-auto" src={LogoDark} alt="Your Company" />
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
			Get Early access
		</h2>
		<p class="mt-4 text-sm leading-6 text-zinc-300 text-center">
			We currently only offer sign up with social providers.
		</p>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-y-4">
		<button
			class={cn(
				buttonVariants({ variant: 'default' }),
				'w-full bg-zinc-950 text-zinc-50 gap-x-2 hover:opacity-80 hover:bg-zinc-950 rounded-lg'
			)}
			type="submit"
		>
			<div class="size-4">
				<svg
					fill="currentColor"
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 22.773 22.773"
					xml:space="preserve"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<g>
							<g>
								<path
									d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
								></path>
								<path
									d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
								></path>
							</g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
							<g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
						</g>
					</g></svg
				>
			</div>
			Sign up with Apple
		</button>
		<button
			class={cn(
				buttonVariants({ variant: 'default' }),
				'w-full bg-zinc-50 text-zinc-900 gap-x-2 hover:opacity-80 hover:bg-zinc-50 rounded-lg'
			)}
			type="submit"
		>
			<div class="size-4">
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					style="display: block;"
				>
					<path
						fill="#EA4335"
						d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
					></path>
					<path
						fill="#4285F4"
						d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
					></path>
					<path
						fill="#FBBC05"
						d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
					></path>
					<path
						fill="#34A853"
						d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
					></path>
					<path fill="none" d="M0 0h48v48H0z"></path>
				</svg>
			</div>
			Sign up with Google
		</button>

		<button
			class={cn(
				buttonVariants({ variant: 'default' }),
				'w-full bg-[#1877F2] text-zinc-100 gap-x-2 hover:opacity-80 hover:bg-[#1877F2] rounded-lg'
			)}
			type="submit"
		>
			<div class="size-4">
				<svg
					fill="currentColor"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 310 310"
					xml:space="preserve"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<g id="XMLID_834_">
							<path
								id="XMLID_835_"
								d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
							></path>
						</g>
					</g></svg
				>
			</div>
			Sign up with Facebook
		</button>

		<p class="mt-4 text-sm leading-6 text-zinc-300 text-center">
			We care about your data. Read our <a
				href="/privacy"
				class={cn(buttonVariants({ variant: 'link' }), 'text-zinc-100 p-0')}
				target="_blank">privacy&nbsp;policy</a
			>.
		</p>
	</div>
</div>

<style>
	:global(body) {
		@apply bg-zinc-900;
	}
</style>
