<script lang="ts">
	export let href: string | null = null;
	export let variant: 'primary' | 'secondary' = 'primary';
	export let type: 'button' | 'submit' = 'button';
	export let fullWidth = false;

	$: classes = `btn-cta ${variant === 'secondary' ? 'btn-secondary' : ''} ${fullWidth ? 'w-full' : ''}`.trim();
</script>

{#if href}
	<a {href} class={classes}>
		<slot />
	</a>
{:else}
	<button {type} class={classes}>
		<slot />
	</button>
{/if}
