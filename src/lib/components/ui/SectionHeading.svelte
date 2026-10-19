<script lang="ts">
	interface Props {
		eyebrow: string;
		title: string;
		description?: string;
	}

	let { eyebrow, title, description }: Props = $props();
</script>

<div class="max-w-3xl">
	<span class="text-xs font-bold uppercase tracking-[0.25em] text-accent-dark">{eyebrow}</span>
	<h2 class="mt-3 text-[clamp(1.875rem,4vw,3rem)] font-extrabold leading-tight text-ink">{title}</h2>
	{#if description}
		<p class="mt-4 text-base text-ink-soft md:text-lg">{description}</p>
	{/if}
</div>
