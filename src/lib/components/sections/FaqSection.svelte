<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';

	const items = ContestService.getInstance().getData().faq;
	let openId: string | null = items[0]?.id ?? null;

	function toggle(id: string): void {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq" class="section-block bg-[var(--color-bg-soft)] relative overflow-hidden">
	<div class="absolute inset-0 studio-grid opacity-30 pointer-events-none"></div>

	<div class="container relative z-10">
		<SectionTitle eyebrow="FAQ" title="Частые вопросы" />
		<div class="max-w-3xl space-y-3">
			{#each items as item (item.id)}
				<div
					class={{
						'rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-200 bg-white overflow-hidden': true,
						'border-[var(--color-accent-dark)] shadow-md': openId === item.id,
						'border-[#bda1c7]/30 shadow-sm hover:border-[#9c6b98]': openId !== item.id
					}}
				>
					<button
						type="button"
						class="w-full flex items-center justify-between gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 text-left group min-h-[56px] touch-manipulation"
						on:click={() => toggle(item.id)}
						aria-expanded={openId === item.id}
					>
						<span class="font-display font-bold text-xs sm:text-sm md:text-base text-[#1a1a1a] group-hover:text-[var(--color-accent-deep)] transition-colors pr-2">{item.question}</span>
						<span
							class="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-200"
							class:rotate-45={openId === item.id}
							style={openId === item.id
								? "background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%); color: white; border-color: transparent;"
								: "background: #faf5fb; border-color: rgba(189,161,199,0.4); color: #764773;"}
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 20 20"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
							>
								<line x1="10" y1="4" x2="10" y2="16" />
								<line x1="4" y1="10" x2="16" y2="10" />
							</svg>
						</span>
					</button>
					{#if openId === item.id}
						<div class="px-5 sm:px-8 pb-5 sm:pb-6 text-[var(--color-text-muted)] text-left sm:text-justify leading-relaxed text-xs sm:text-sm md:text-base border-t border-[var(--color-accent)]/15 pt-3.5 sm:pt-4">
							{@html item.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
