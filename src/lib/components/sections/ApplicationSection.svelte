<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';
	import Button from '../ui/Button.svelte';

	const steps = ContestService.getInstance().getData().applicationSteps;
	let submitted = false;

	function handleSubmit() {
		submitted = true;
	}
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

		<div class="max-w-2xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--color-accent)]/30 shadow-xl relative overflow-hidden interactive-card">
			<div class="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/15 rounded-full blur-2xl pointer-events-none"></div>

			{#if submitted}
				<div class="text-center py-8 sm:py-12">
					<div class="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 border border-green-200 shadow-sm text-3xl sm:text-4xl">
						<i class="ri-checkbox-circle-line leading-none"></i>
					</div>
					<h3 class="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-[#1a1a1a] mb-2 sm:mb-3">Заявка отправлена!</h3>
					<p class="text-[var(--color-text-muted)] text-sm sm:text-base max-w-md mx-auto">Мы свяжемся с тобой в ближайшее время.</p>
				</div>
			{:else}
				<div class="mb-6 sm:mb-8">
					<h3 class="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase text-[#1a1a1a] mb-2 sm:mb-3">Форма заявки</h3>
					<p class="text-[var(--color-text-muted)] text-xs sm:text-sm md:text-base text-left leading-relaxed">
						Заполни данные. Если ты не знаешь, как загрузить видео на Яндекс Диск, прочитай <a href="#guide" class="text-[#764773] underline font-bold hover:text-[#9c6b98] transition-colors">нашу подробную инструкцию</a>.
					</p>
				</div>
				<form on:submit|preventDefault={handleSubmit} class="space-y-4 sm:space-y-5">
					<div>
						<label for="name" class="block font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black/80 mb-1.5 sm:mb-2">ФИО</label>
						<input type="text" id="name" required class="interactive-input w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border border-black/10 bg-[var(--color-bg-soft)]/50 focus:bg-white outline-none font-medium text-base sm:text-sm" placeholder="Иванова Анна Сергеевна" />
					</div>
					<div>
						<label for="edu" class="block font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black/80 mb-1.5 sm:mb-2">Место обучения</label>
						<input type="text" id="edu" required class="interactive-input w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border border-black/10 bg-[var(--color-bg-soft)]/50 focus:bg-white outline-none font-medium text-base sm:text-sm" placeholder="ГБПОУ Колледж креативных индустрий" />
					</div>
					<div>
						<label for="contact" class="block font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black/80 mb-1.5 sm:mb-2">Способ связи (почта, ник в ТГ или Max)</label>
						<input type="text" id="contact" required class="interactive-input w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border border-black/10 bg-[var(--color-bg-soft)]/50 focus:bg-white outline-none font-medium text-base sm:text-sm" placeholder="example@mail.ru или @nickname" />
					</div>
					<div>
						<label for="link" class="block font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black/80 mb-1.5 sm:mb-2">Ссылка на видео с защитой (Яндекс Диск)</label>
						<input type="url" id="link" required class="interactive-input w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl border border-black/10 bg-[var(--color-bg-soft)]/50 focus:bg-white outline-none font-medium text-base sm:text-sm" placeholder="https://disk.yandex.ru/..." />
					</div>
					<div class="pt-3 sm:pt-4">
						<Button type="submit" fullWidth>Отправить заявку</Button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</section>
