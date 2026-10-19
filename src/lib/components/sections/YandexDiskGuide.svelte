<script lang="ts">
	import { ContestService } from '$lib/services/ContestService';
	import SectionTitle from '../ui/SectionTitle.svelte';

	const steps = ContestService.getInstance().getData().yandexSteps;
</script>

<section id="guide" class="section-block">
	<div class="container">
		<SectionTitle
			eyebrow="Инструкция"
			title="Как загрузить видео на Яндекс Диск"
			description="Бояться технологий — нормально! Мы подготовили простую инструкцию."
		/>
		
		<div class="max-w-3xl space-y-4">
			{#each steps as step (step.index)}
				<div class="flex gap-4 p-5 rounded-2xl bg-[var(--color-bg-soft)] border border-[var(--color-accent)]/20">
					<div class="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] text-white font-bold flex items-center justify-center text-sm mt-1">
						{step.index}
					</div>
					<div>
						<h4 class="font-bold text-lg mb-1">{step.title}</h4>
						<p class="text-[var(--color-text-muted)] text-justify">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
