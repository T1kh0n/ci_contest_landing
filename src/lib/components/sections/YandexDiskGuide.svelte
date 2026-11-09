<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';
	import GlassOrb from '../ui/GlassOrb.svelte';

	const steps = ContestService.getInstance().getData().yandexSteps;
</script>

<section id="guide" class="section-block bg-white relative overflow-hidden scroll-fade-section is-visible">
	<div class="absolute top-1/2 -left-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" style="background: radial-gradient(circle, rgba(156, 107, 152, 0.2) 0%, transparent 70%);"></div>

	<!-- 3D Декоративные объекты (видны на всех экранах) -->
	<div class="absolute -right-3 sm:right-[5%] top-[14%] sm:top-[18%] pointer-events-none z-0 opacity-75 sm:opacity-80">
		<GlassOrb variant="purple" size="w-16 h-16 sm:w-28 sm:h-28" animation="float-slow" />
	</div>
	<div class="absolute -left-4 sm:-left-6 bottom-[8%] sm:bottom-[10%] pointer-events-none z-0 opacity-70 sm:opacity-75">
		<GlassOrb variant="glass" size="w-14 h-14 sm:w-24 sm:h-24" animation="bubble" />
	</div>

	<div class="container relative z-10">
		<SectionTitle
			eyebrow="Инструкция"
			title="Как загрузить видео на Яндекс Диск"
			description="Бояться технологий — нормально! Мы подготовили простую инструкцию."
			theme="secondary"
		/>
		
		<div class="max-w-4xl grid md:grid-cols-2 gap-3 sm:gap-4 relative">
			{#each steps as step (step.index)}
				<div class="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] glass-card-secondary transition-all group interactive-card">
					<div
						class="shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl text-white font-display font-black flex items-center justify-center text-xs sm:text-sm shadow-sm transition-transform duration-200 group-hover:scale-105"
						style="background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%);"
					>
						{step.index}
					</div>
					<div class="flex-1 min-w-0">
						<h4 class="font-display font-black text-xs sm:text-base uppercase text-[#1a1a1a] mb-1 sm:mb-1.5">{step.title}</h4>
						<p class="text-[var(--color-text-muted)] text-[11px] sm:text-sm text-left sm:text-justify leading-relaxed">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
