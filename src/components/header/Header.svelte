<script lang="ts">
	import HeaderNavigationButton from './HeaderNavigationButton.svelte';
</script>

<header class="px-8 py-20 flex items-center justify-center space-x-20">

	<div class="flex items-center">
		<img src="modulite-logo.png" alt="Modu.lite logo" class="w-[220px]" />
	</div>

	<nav class="flex items-center space-x-8">
		<HeaderNavigationButton href="#home" title="Home" />
		<HeaderNavigationButton href="#how-it-works" title="How it works" />
		<HeaderNavigationButton href="#about-us" title="About us" />
		<HeaderNavigationButton href="#contacts" title="Contacts" />
	</nav>

	<a
		href="#download"
		class="bg-lemonYellow text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-200 shadow-inset"
	>
		DOWNLOAD MODU.LITE
	</a>
</header>
