<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="page-load-bar" aria-hidden="true"></div>
{@render children()}
