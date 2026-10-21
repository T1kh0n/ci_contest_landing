<script lang="ts">
	export let eyebrow = '';
	export let title = '';
	export let description = '';
	export let theme: 'primary' | 'secondary' = 'primary';
</script>

<div class="max-w-3xl mb-8 sm:mb-12 md:mb-16 text-left relative">
	{#if eyebrow}
		{#if theme === 'secondary'}
			<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf5fb] border border-[#bda1c7]/50 shadow-sm text-xs font-display font-bold uppercase tracking-wider text-[#764773] mb-3 sm:mb-4">
				<span class="w-2 h-2 rounded-full bg-[#9c6b98] animate-pulse shrink-0"></span>
				<span class="truncate">{eyebrow}</span>
			</div>
		{:else}
			<div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--color-accent)]/40 shadow-sm text-xs font-display font-bold uppercase tracking-wider text-[var(--color-accent-deep)] mb-3 sm:mb-4">
				<span class="w-2 h-2 rounded-full bg-[var(--color-accent-dark)] animate-pulse shrink-0"></span>
				<span class="truncate">{eyebrow}</span>
			</div>
		{/if}
	{/if}
	<h2 class="font-display font-black text-[clamp(1.5rem,4.5vw,2.75rem)] uppercase tracking-tight text-[#1a1a1a] mb-3 sm:mb-4 leading-[1.15]">
		{title}
	</h2>
	{#if description}
		<p class="text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] text-left sm:text-justify leading-relaxed max-w-2xl">
			{description}
		</p>
	{/if}
</div>
