<script lang="ts">
	import { ContestService } from '$lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';

	const formats = ContestService.getInstance().getData().formats;
</script>

<section id="formats" class="py-20 md:py-28">
	<div class="container">
		<SectionTitle
			eyebrow="Номинации"
			title="Форматы участия"
			description="Выберите направление, в котором вам ближе всего создавать смыслы."
		/>
		<div class="grid gap-6 md:grid-cols-3">
			{#each formats as format, i (format.id)}
				<article
					class="group p-8 rounded-3xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1.25rem_2.5rem_rgba(224,131,131,0.12)] hover:border-[var(--color-accent)]"
				>
					<div
						class="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/20 flex items-center justify-center mb-6 text-[var(--color-accent-dark)] font-bold text-lg"
					>
						{String(i + 1).padStart(2, '0')}
					</div>
					<h3 class="text-2xl font-bold mb-3">{format.title}</h3>
					<p class="text-[var(--color-text-muted)] mb-6 leading-relaxed">{format.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each format.tags as tag}
							<span
								class="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-semibold"
							>
								{tag}
							</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
