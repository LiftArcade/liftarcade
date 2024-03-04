<script context="module" lang="ts">
	export function turnOnDarkMode() {
		localStorage.setItem('theme', 'dark');
		document.documentElement.classList.add('dark');
		// eslint-disable-next-line unicorn/no-array-for-each, @typescript-eslint/no-explicit-any
		document.head.querySelectorAll('.meta-theme').forEach((meta: any) => {
			meta.content = meta.dataset.dark;
		});
	}

	export function turnOffDarkMode() {
		localStorage.setItem('theme', 'light');
		document.documentElement.classList.remove('dark');
		// eslint-disable-next-line unicorn/no-array-for-each, @typescript-eslint/no-explicit-any
		document.head.querySelectorAll('.meta-theme').forEach((meta: any) => {
			meta.content = meta.dataset.light;
		});
	}

	export function setThemeToSystem() {
		// unset the theme and set the theme to match the system.
		localStorage.removeItem('theme');
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			// eslint-disable-next-line unicorn/no-array-for-each, @typescript-eslint/no-explicit-any
			document.head.querySelectorAll('.meta-theme').forEach((meta: any) => {
				meta.content = meta.dataset.dark;
			});
		} else {
			document.documentElement.classList.remove('dark');
			// eslint-disable-next-line unicorn/no-array-for-each, @typescript-eslint/no-explicit-any
			document.head.querySelectorAll('.meta-theme').forEach((meta: any) => {
				meta.content = meta.dataset.light;
			});
		}
	}
</script>

<svelte:head>
	<!-- Maybe look at switching this to a cookie in the future? -->
	<meta
		name="theme-color"
		content="#ffffff"
		class="meta-theme"
		data-light="#ffffff"
		data-dark="#030712"
	/>
	<meta
		name="theme-color"
		content="#030712"
		class="meta-theme"
		data-light="#ffffff"
		data-dark="#030712"
		media="(prefers-color-scheme: dark)"
	/>
	<script>
		// Check if the user has previously toggled the theme.
		var theme = localStorage.getItem('theme');

		if (
			theme === 'dark' ||
			// Default to the system's setting.
			(!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			// Switch to dark mode.
			// Iterate through the relevant meta tags and change to value for dark mode.
			document.head.querySelectorAll('.meta-theme').forEach((meta) => {
				meta.content = meta.dataset.dark;
			});
			document.documentElement.classList.add('dark');
		}

		// Gracefully transition when a system user changes their theme.
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (localStorage.getItem('theme')) return;
			e.matches && document.documentElement.classList.add('dark');
			!e.matches && document.documentElement.classList.remove('dark');
		});
	</script>
</svelte:head>
