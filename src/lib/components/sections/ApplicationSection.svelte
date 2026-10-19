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

<section id="application" class="section-block bg-[var(--color-bg-soft)]">
	<div class="container">
		<SectionTitle
			eyebrow="Подача работ"
			title="Как принять участие"
			description="Всего несколько шагов отделяют твой проект от победы."
		/>
		
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
			{#each steps as step (step.index)}
				<div class="p-6 rounded-3xl bg-white border border-black/5 shadow-sm relative overflow-hidden group">
					<div class="absolute top-0 right-0 p-4 opacity-5 font-extrabold text-8xl leading-none group-hover:scale-110 transition-transform">
						{step.index}
					</div>
					<div class="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/20 text-[var(--color-accent-dark)] font-bold text-xl flex items-center justify-center mb-6">
						{step.index}
					</div>
					<h3 class="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
					<p class="text-[var(--color-text-muted)] text-sm text-left relative z-10">{step.description}</p>
				</div>
			{/each}
		</div>

		<div class="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-md">
			{#if submitted}
				<div class="text-center py-12">
					<div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
					</div>
					<h3 class="text-2xl font-bold mb-2">Заявка отправлена!</h3>
					<p class="text-[var(--color-text-muted)]">Мы свяжемся с тобой в ближайшее время.</p>
				</div>
			{:else}
				<h3 class="text-2xl font-bold mb-2">Форма заявки</h3>
				<p class="text-[var(--color-text-muted)] mb-8 text-left">
					Заполни данные. Если ты не знаешь, как загрузить видео на Яндекс Диск, прочитай <a href="#guide" class="text-[var(--color-accent-dark)] underline font-semibold hover:text-[var(--color-accent)] transition-colors">нашу подробную инструкцию</a>.
				</p>
				<form on:submit|preventDefault={handleSubmit} class="space-y-5">
					<div>
						<label for="name" class="block text-sm font-bold mb-2">ФИО</label>
						<input type="text" id="name" required class="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[var(--color-accent-dark)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all" placeholder="Иванова Анна Сергеевна" />
					</div>
					<div>
						<label for="edu" class="block text-sm font-bold mb-2">Место обучения</label>
						<input type="text" id="edu" required class="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[var(--color-accent-dark)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all" placeholder="ГБПОУ Колледж креативных индустрий" />
					</div>
					<div>
						<label for="contact" class="block text-sm font-bold mb-2">Способ связи (почта, ник в ТГ или Max)</label>
						<input type="text" id="contact" required class="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[var(--color-accent-dark)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all" placeholder="example@mail.ru или @nickname" />
					</div>
					<div>
						<label for="link" class="block text-sm font-bold mb-2">Ссылка на видео с защитой (Яндекс Диск)</label>
						<input type="url" id="link" required class="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[var(--color-accent-dark)] focus:ring-2 focus:ring-[var(--color-accent)]/20 outline-none transition-all" placeholder="https://disk.yandex.ru/..." />
					</div>
					<div class="pt-4">
						<Button type="submit" fullWidth>Отправить заявку</Button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</section>
