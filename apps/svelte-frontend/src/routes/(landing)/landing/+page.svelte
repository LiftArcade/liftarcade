<script>
	import LogoDark from '$lib/assets/logo-dark.svg';
	import { Icon, RocketLaunch } from 'svelte-heros-v2';
</script>

<div id="bg-image" class="flex flex-col h-full">
	<header class="h-8 w-full z-40">
		<nav class="flex w-full items-center justify-between p-6 lg:px-8">
			<a
				href="/"
				class="-m-1.5 p-1.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
			>
				<span class="sr-only">LiftArcade</span>
				<img class="h-8 sm:h-9 md:h-10 w-auto" src={LogoDark} alt="" />
			</a>

			<div class="flex flex-1 justify-end items-center text-gray-300">
				<Icon icon={RocketLaunch} class="h-6 w-6" color="currentColor" tabIndex="-1" />
				<div
					href="#"
					class="rounded-lg px-2 py-1 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
				>
					Coming soon <span aria-hidden="true"></span>
				</div>
			</div>
		</nav>
	</header>

	<div class="flex flex-col grow relative isolate px-6 lg:px-8">
		<div class="mx-auto max-w-3xl flex flex-col items-center justify-center flex-grow">
			<div class="mb-8 flex justify-center">
				<div
					class="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-400 backdrop-blur-sm border-zinc-600 border ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange-600"
				>
					Read about what we’re building this and what to expect
					<a href="/landing/posts/intro" class="font-semibold text-orange-600 focus:outline-none"
						><span class="absolute inset-0 ml-2" aria-hidden="true"></span>Read more
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
			<div class="text-center">
				<h1 class="text-4xl text-white font-bold tracking-tight text-text sm:text-6xl">
					Introducing a better workout experience
				</h1>
				<p class="mt-6 text-lg leading-8 text-zinc-400">
					Designed for athletes looking to get the most out of their fitness. Detailed analysis of
					your workouts so you can maximize your gains.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/landing"
						class="rounded-lg backdrop-blur-sm border-2 border-zinc-700 bg-zinc-900/40 px-3.5 py-2.5 text-sm font-semibold text-orange-100 hover:text-orange-200 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors duration-150 active:text-orange-400"
						>Sign up for early access &rightarrow;</a
					>
				</div>
			</div>
		</div>
	</div>

	<footer class="h-8 text-center text-zinc-400 text-xs">&copy; LiftArcade 2023</footer>
</div>

<style>
	#bg-image {
		background-image: url($lib/assets/landing/bg.png);
		background-size: cover;
		background-position: center;
	}
</style>
