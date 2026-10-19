<script lang="ts">
	import SectionTitle from '../ui/SectionTitle.svelte';
</script>

<section id="about" class="section-block">
	<div class="container">
		<SectionTitle
			eyebrow="О конкурсе"
			title="Дизайн, который меняет мир"
			description="Мы ищем социально значимые проекты. Твоя задача — сделать важную информацию понятной и красивой."
		/>
		
		<div class="max-w-4xl bg-white rounded-3xl border border-black/5 p-8 md:p-12 shadow-sm">
			<div class="grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h3 class="text-2xl font-bold mb-4">Какие работы мы ждем?</h3>
					<p class="text-[var(--color-text-muted)] mb-6 text-justify">
						Ты можешь прислать плакаты, брошюры, буклеты, методички и другие виды дизайна. Главное — чтобы работа несла пользу обществу.
					</p>
					<div class="flex flex-wrap gap-2">
						{#each ['Плакаты', 'Брошюры', 'Буклеты', 'Методички', 'Памятки'] as tag}
							<span class="px-4 py-2 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-sm font-semibold">
								{tag}
							</span>
						{/each}
					</div>
				</div>
				<div class="bg-[var(--color-bg-soft)] rounded-2xl p-6 text-sm text-[var(--color-text-muted)] italic text-justify">
					"Пример темы: разработка дизайна руководства при сигнале «Внимание всем». Важно, чтобы человек в стрессовой ситуации смог быстро считать информацию благодаря твоему дизайну."
				</div>
			</div>
		</div>
	</div>
</section>
