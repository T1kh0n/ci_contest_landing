<script lang="ts">
	import SectionTitle from '../ui/SectionTitle.svelte';
</script>

<section id="about" class="section-block bg-white relative overflow-hidden">
	<div class="absolute -top-32 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style="background: radial-gradient(circle, rgba(216, 194, 221, 0.25) 0%, transparent 70%);"></div>

	<div class="container relative z-10">
		<SectionTitle
			eyebrow="О конкурсе"
			title="Для любых креативных специальностей"
			description="Мы ищем социально значимые проекты. Твоя задача — сделать важную информацию понятной и доступной с помощью дизайна."
		/>
		
		<div class="grid lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
			<div class="lg:col-span-7 bg-[var(--color-bg-soft)] rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--color-accent)]/30 p-6 sm:p-8 md:p-12 shadow-sm flex flex-col justify-between relative overflow-hidden canvas-bracket">
				<div class="relative z-10">
					<h3 class="font-display font-black text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] uppercase mb-4">Какие работы мы ждем?</h3>
					<p class="text-[var(--color-text-muted)] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-left sm:text-justify leading-relaxed">
						Ты можешь прислать абсолютно любой проект: от дизайна брошюр и полиграфии до разработки полноценных сайтов и интерфейсов. Главное — чтобы работа несла пользу обществу.
					</p>
				</div>

				<div class="flex flex-wrap gap-2 sm:gap-2.5 relative z-10">
					{#each ['Графический дизайн', 'Веб-дизайн', 'Полиграфия', 'Интерфейсы', 'Медиа'] as tag, i}
						<span
							class="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-xs sm:text-sm font-display font-bold uppercase tracking-wide shadow-sm transition-all duration-200"
							style={i % 2 === 1
								? "border: 1px solid rgba(189,161,199,0.5); color: #764773;"
								: "border: 1px solid rgba(224,131,131,0.4); color: var(--color-accent-deep);"}
						>
							{tag}
						</span>
					{/each}
				</div>

				<div class="absolute -bottom-8 -right-8 w-40 sm:w-48 h-40 sm:h-48 bg-[var(--color-accent)]/15 rounded-full blur-2xl pointer-events-none"></div>
			</div>

			<div
				class="lg:col-span-5 text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-md flex flex-col justify-between relative overflow-hidden canvas-bracket"
				style="background: linear-gradient(135deg, #caa9cd 0%, #a87ba8 45%, #764773 100%);"
			>
				<div class="absolute inset-0 opacity-10 studio-grid pointer-events-none"></div>

				<div class="relative z-10">
					<div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl sm:text-2xl mb-5 sm:mb-6 shadow-inner">
						💡
					</div>
					<div class="text-sm sm:text-base md:text-lg text-white leading-relaxed text-left sm:text-justify font-medium">
						"Пример темы: создание сайта-памятки при сигнале «Внимание всем» или разработка серии брошюр по безопасности. Важно, чтобы человек в стрессовой ситуации смог быстро считать информацию благодаря твоему проекту."
					</div>
				</div>

				<div class="relative z-10 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/20 flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-white/80">
					<span>Проект со смыслом</span>
					<span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
				</div>
			</div>
		</div>
	</div>
</section>
