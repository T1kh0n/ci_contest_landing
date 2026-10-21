<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';

	const steps = ContestService.getInstance().getData().yandexSteps;
</script>

<section id="guide" class="section-block bg-white relative overflow-hidden scroll-fade-section is-visible">
	<div class="absolute top-1/2 -left-24 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style="background: radial-gradient(circle, rgba(156, 107, 152, 0.2) 0%, transparent 70%);"></div>

	<div class="container relative z-10">
		<SectionTitle
			eyebrow="Инструкция"
			title="Как загрузить видео на Яндекс Диск"
			description="Бояться технологий — нормально! Мы подготовили простую инструкцию."
			theme="secondary"
		/>
		
		<div class="max-w-4xl grid md:grid-cols-2 gap-4">
			{#each steps as step (step.index)}
				<div class="flex items-start gap-3.5 sm:gap-4 p-5 sm:p-6 rounded-[1.75rem] sm:rounded-[2rem] bg-[#faf5fb] border border-[#bda1c7]/35 hover:border-[#9c6b98] transition-colors group interactive-card">
					<div
						class="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl text-white font-display font-black flex items-center justify-center text-xs sm:text-sm shadow-sm transition-transform duration-200 group-hover:scale-105"
						style="background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%);"
					>
						{step.index}
					</div>
					<div class="flex-1 min-w-0">
						<h4 class="font-display font-black text-sm sm:text-base uppercase text-[#1a1a1a] mb-1.5">{step.title}</h4>
						<p class="text-[var(--color-text-muted)] text-xs sm:text-sm text-left sm:text-justify leading-relaxed">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
