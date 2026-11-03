<script lang="ts">
	import { onMount } from 'svelte';
	import { ContestService } from '#lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';
	import Button from '../ui/Button.svelte';

	const contestData = ContestService.getInstance().getData();
	const steps = contestData.applicationSteps;
	const formId = contestData.yandexFormId;

	let iframeLoaded = false;
	let showDirectLink = false;

	onMount(() => {
		const timer = setTimeout(() => {
			showDirectLink = true;
		}, 4000);

		return () => clearTimeout(timer);
	});
</script>

<section id="application" class="section-block bg-[var(--color-bg-soft)] relative overflow-hidden scroll-fade-section is-visible">
	<div class="absolute inset-0 studio-grid opacity-40 pointer-events-none"></div>
	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none" style="background: radial-gradient(circle, rgba(224, 131, 131, 0.2) 0%, transparent 70%);"></div>

	<div class="container relative z-10">
		<SectionTitle
			eyebrow="Подача работ"
			title="Как принять участие"
			description="Всего несколько шагов отделяют твой проект от победы."
		/>
		
		<div class="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
			{#each steps as step, i (step.index)}
				<div
					class="p-6 sm:p-8 rounded-[1.75rem] sm:rounded-[2rem] bg-white border shadow-sm relative overflow-hidden group interactive-card"
					style={i % 2 === 1 ? "border-color: rgba(189,161,199,0.45);" : "border-color: rgba(224,131,131,0.35);"}
				>
					<div class="absolute top-2 right-4 opacity-[0.04] font-display font-black text-7xl sm:text-8xl leading-none group-hover:scale-105 group-hover:opacity-10 transition-all select-none">
						{step.index}
					</div>
					{#if i % 2 === 1}
						<div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl text-white font-display font-black text-lg sm:text-xl flex items-center justify-center mb-5 sm:mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%);">
							{String(step.index).padStart(2, '0')}
						</div>
					{:else}
						<div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[var(--color-accent)]/40 to-[var(--color-accent-dark)]/30 text-[var(--color-accent-deep)] font-display font-black text-lg sm:text-xl flex items-center justify-center mb-5 sm:mb-6 shadow-inner transition-transform duration-300 group-hover:scale-110">
							{String(step.index).padStart(2, '0')}
						</div>
					{/if}
					<h3 class="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-[#1a1a1a] mb-2 sm:mb-3 relative z-10">{step.title}</h3>
					<p class="text-[var(--color-text-muted)] text-xs sm:text-sm text-left relative z-10 leading-relaxed">{step.description}</p>
				</div>
			{/each}
		</div>

		<div class="max-w-3xl mx-auto bg-white p-5 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--color-accent)]/30 shadow-xl relative overflow-hidden interactive-card">
			<div class="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/15 rounded-full blur-2xl pointer-events-none"></div>

			<div class="mb-6 sm:mb-8 text-center sm:text-left">
				<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--color-accent-deep)] text-xs font-display font-bold uppercase tracking-wider mb-3">
					<span class="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
					Безопасный сбор данных через Яндекс
				</div>
				<h3 class="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-[#1a1a1a] mb-2 sm:mb-3">Электронная форма заявки</h3>
				<p class="text-[var(--color-text-muted)] text-xs sm:text-sm md:text-base leading-relaxed">
					Заполни поля формы ниже. Обработка персональных данных защищена согласно Федеральному закону № 152-ФЗ. Если требуется загрузить видео на Яндекс Диск, ознакомься с <a href="#guide" class="text-[#764773] underline font-bold hover:text-[#9c6b98] transition-colors">инструкцией</a>.
				</p>
			</div>

			<div class="relative w-full rounded-2xl overflow-hidden border border-black/5 bg-[var(--color-bg-soft)] min-h-[580px] sm:min-h-[640px]">
				{#if !iframeLoaded}
					<div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-white/80 backdrop-blur-sm transition-opacity">
						<div class="w-10 h-10 border-3 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin mb-4"></div>
						<div class="font-display font-bold text-sm text-[#1a1a1a]">Загрузка защищенной формы Яндекс...</div>
						<div class="text-xs text-[var(--color-text-muted)] mt-1 max-w-xs">Шифрование соединения по протоколу SSL/TLS</div>
					</div>
				{/if}

				<iframe
					src="https://forms.yandex.ru/surveys/{formId}/?iframe=1"
					name="yandex-form-{formId}"
					title="Форма подачи заявки на конкурс"
					width="100%"
					height="680"
					frameborder="0"
					class="w-full relative z-0 transition-opacity duration-300"
					style="border: none; min-height: 640px;"
					on:load={() => (iframeLoaded = true)}
				></iframe>
			</div>

			<div class="mt-6 pt-5 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-text-muted)]">
				<div class="flex items-center gap-2">
					<i class="ri-shield-check-line text-green-600 text-base"></i>
					<span>152-ФЗ: Данные хранятся в защищенных ЦОД РФ</span>
				</div>
				<a
					href="https://forms.yandex.ru/surveys/{formId}/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-[#764773] font-bold hover:underline inline-flex items-center gap-1"
				>
					<span>Открыть форму в отдельном окне</span>
					<i class="ri-external-link-line"></i>
				</a>
			</div>
		</div>
	</div>
</section>
