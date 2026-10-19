<script lang="ts">
	import { ContestService } from '$lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';

	const items = ContestService.getInstance().getData().faq;
	let openId: string | null = items[0]?.id ?? null;

	function toggle(id: string): void {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq" class="section-block bg-[var(--color-bg-soft)]">
	<div class="container">
		<SectionTitle eyebrow="FAQ" title="Частые вопросы" />
		<div class="max-w-3xl space-y-3">
			{#each items as item (item.id)}
				<div
					class={{
						'rounded-2xl border transition-colors bg-white': true,
						'border-[var(--color-accent)]': openId === item.id,
						'border-black/10': openId !== item.id
					}}
				>
					<button
						type="button"
						class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
						on:click={() => toggle(item.id)}
					>
						<span class="font-bold text-base md:text-lg">{item.question}</span>
						<svg
							class="shrink-0 transition-transform duration-300"
							class:rotate-45={openId === item.id}
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						>
							<line x1="10" y1="4" x2="10" y2="16" />
							<line x1="4" y1="10" x2="16" y2="10" />
						</svg>
					</button>
					{#if openId === item.id}
						<div class="px-6 pb-6 text-[var(--color-text-muted)] text-justify leading-relaxed">
							{@html item.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
