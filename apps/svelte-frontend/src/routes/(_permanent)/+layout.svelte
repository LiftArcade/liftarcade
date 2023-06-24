<script>
	import Logo from '$lib/assets/landing-logo-icon.svg';
</script>

<div class="flex flex-col items-center py-12 px-4">
	<img src={Logo} alt="check logo" class="h-10 dark:invert mb-12" />
	<slot />
</div>
