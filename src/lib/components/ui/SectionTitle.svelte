<script lang="ts">
	export let eyebrow = '';
	export let title = '';
	export let description = '';
</script>

<div class="max-w-3xl mb-12 md:mb-16 text-left">
	{#if eyebrow}
		<span class="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-xs md:text-sm font-bold text-[var(--color-accent-dark)] uppercase tracking-wider mb-4">
			{eyebrow}
		</span>
	{/if}
	<h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5">{title}</h2>
	{#if description}
		<p class="text-base md:text-lg text-[var(--color-text-muted)] text-justify">{description}</p>
	{/if}
</div>
