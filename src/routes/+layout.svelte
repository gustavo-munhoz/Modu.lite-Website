<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<style>
	:global(body) {
			background: #161414;
	}
</style>

{@render children()}
