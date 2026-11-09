<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';
	import GlassOrb from '../ui/GlassOrb.svelte';

	const items = ContestService.getInstance().getData().faq;
	let openId: string | null = items[0]?.id ?? null;

	function toggle(id: string): void {
		openId = openId === id ? null : id;
	}
</script>

<section id="faq" class="section-block bg-[var(--color-bg-soft)] relative overflow-hidden scroll-fade-section is-visible">
	<div class="absolute inset-0 studio-grid opacity-30 pointer-events-none"></div>

	<!-- 3D Декоративные объекты -->
	<div class="absolute right-[8%] top-[25%] pointer-events-none hidden lg:block z-0 opacity-80">
		<GlassOrb variant="fusion" size="w-32 h-32" animation="float-slow" />
	</div>
	<div class="absolute left-[4%] bottom-[15%] pointer-events-none hidden md:block z-0 opacity-75">
		<GlassOrb variant="coral" size="w-24 h-24" animation="bubble" />
	</div>

	<div class="container relative z-10">
		<SectionTitle eyebrow="FAQ" title="Частые вопросы" />
		<div class="max-w-3xl space-y-3 relative">
			{#each items as item (item.id)}
				<div
					class={{
						'rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-300 overflow-hidden interactive-card glass-card': true,
						'border-[#9c6b98] shadow-lg ring-2 ring-[#9c6b98]/20 bg-white/95': openId === item.id,
						'border-white/80 shadow-sm hover:border-[#9c6b98]': openId !== item.id
					}}
				>
					<button
						type="button"
						class="w-full flex items-center justify-between gap-3 sm:gap-4 px-5 sm:px-8 py-4 sm:py-5 text-left group min-h-[56px] touch-manipulation cursor-pointer transition-colors active:scale-[0.99]"
						on:click={() => toggle(item.id)}
						aria-expanded={openId === item.id}
					>
						<span class="font-display font-bold text-xs sm:text-sm md:text-base text-[#1a1a1a] group-hover:text-[var(--color-accent-deep)] transition-colors pr-2">{item.question}</span>
						<span
							class="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm"
							style={openId === item.id
								? 'background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%); color: white;'
								: 'background: rgba(250, 245, 251, 0.85); border: 1.5px solid rgba(189,161,199,0.5); color: #764773;'}
						>
							<svg
								class="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
								class:rotate-45={openId === item.id}
								viewBox="0 0 16 16"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="round"
							>
								<line x1="8" y1="2.5" x2="8" y2="13.5" />
								<line x1="2.5" y1="8" x2="13.5" y2="8" />
							</svg>
						</span>
					</button>

					<!-- Плавное раскрытие без скачков высоты -->
					<div
						class="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
						style="grid-template-rows: {openId === item.id ? '1fr' : '0fr'};"
					>
						<div class="overflow-hidden min-h-0">
							<div class="px-5 sm:px-8 pb-5 sm:pb-6 text-[var(--color-text-muted)] text-left sm:text-justify leading-relaxed text-xs sm:text-sm md:text-base border-t border-[var(--color-accent)]/15 pt-3.5 sm:pt-4 transition-opacity duration-300 {openId === item.id ? 'opacity-100' : 'opacity-0'}">
								{@html item.answer}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
