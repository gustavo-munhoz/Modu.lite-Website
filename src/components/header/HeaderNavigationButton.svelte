<script lang="ts">
	export let href: string = '#';
	export let title: string = '';
</script>

<a href={href} class="relative group font-semibold text-potatoYellow hover:text-lemonYellow transition duration-300">
	{title}
	<span class="absolute left-0 bottom-0 w-0 h-[2px] bg-lemonYellow group-hover:w-full transition-all duration-300"></span>
</a>
