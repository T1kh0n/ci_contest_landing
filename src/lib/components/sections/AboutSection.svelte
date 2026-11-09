<script lang="ts">
	import SectionTitle from '../ui/SectionTitle.svelte';
	import GlassOrb from '../ui/GlassOrb.svelte';
</script>

<section id="about" class="section-block bg-white relative overflow-hidden scroll-fade-section is-visible">
	<div class="absolute -top-24 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" style="background: radial-gradient(circle, rgba(216, 194, 221, 0.25) 0%, transparent 70%);"></div>

	<!-- 3D Декоративные объекты (видны на всех экранах) -->
	<div class="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 pointer-events-none z-0 opacity-75 sm:opacity-80">
		<GlassOrb variant="purple" size="w-20 h-20 sm:w-32 sm:h-32" animation="float-slow" />
	</div>
	<div class="absolute -bottom-6 left-[2%] sm:-bottom-10 sm:left-[8%] pointer-events-none z-0 opacity-70 sm:opacity-75">
		<GlassOrb variant="glass" size="w-16 h-16 sm:w-28 sm:h-28" animation="bubble" />
	</div>

	<div class="container relative z-10">
		<SectionTitle
			eyebrow="О конкурсе"
			title="Для любых креативных специальностей"
			description="Мы ищем социально значимые проекты. Твоя задача — сделать важную информацию понятной и доступной с помощью дизайна."
		/>
		
		<div class="grid lg:grid-cols-12 gap-4 sm:gap-6 items-stretch relative">
			<div class="lg:col-span-7 glass-card-accent rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden interactive-card">
				<div class="relative z-10">
					<h3 class="font-display font-black text-lg sm:text-2xl md:text-3xl text-[#1a1a1a] uppercase mb-3 sm:mb-4">Какие работы мы ждем?</h3>
					<p class="text-[var(--color-text-muted)] text-xs sm:text-base md:text-lg mb-5 sm:mb-8 text-left sm:text-justify leading-relaxed">
						Ты можешь прислать абсолютно любой проект: от дизайна брошюр и полиграфии до разработки полноценных сайтов и интерфейсов. Главное — чтобы работа несла пользу обществу.
					</p>
				</div>

				<div class="flex flex-wrap gap-1.5 sm:gap-2.5 relative z-10">
					{#each ['Графический дизайн', 'Веб-дизайн', 'Полиграфия', 'Интерфейсы', 'Медиа'] as tag, i}
						<span
							class="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full glass-pill text-[11px] sm:text-sm font-display font-bold uppercase tracking-wide transition-all duration-200 cursor-default hover:scale-105"
							style={i % 2 === 1
								? "border: 1.5px solid rgba(189,161,199,0.6); color: #764773;"
								: "border: 1.5px solid rgba(224,131,131,0.5); color: var(--color-accent-deep);"}
						>
							{tag}
						</span>
					{/each}
				</div>

				<div class="absolute -bottom-8 -right-8 w-32 sm:w-48 h-32 sm:h-48 bg-[var(--color-accent)]/15 rounded-full blur-2xl pointer-events-none"></div>
			</div>

			<div
				class="lg:col-span-5 text-white rounded-[1.75rem] sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-lg flex flex-col justify-between relative overflow-hidden interactive-card backdrop-blur-xl border border-white/30"
				style="background: linear-gradient(135deg, rgba(202, 169, 205, 0.95) 0%, rgba(168, 123, 168, 0.92) 45%, rgba(118, 71, 115, 0.98) 100%);"
			>
				<div class="absolute inset-0 opacity-10 studio-grid pointer-events-none"></div>

				<div class="relative z-10">
					<div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-lg sm:text-2xl mb-4 sm:mb-6 shadow-inner border border-white/30">
						<i class="ri-lightbulb-line leading-none"></i>
					</div>
					<div class="text-xs sm:text-base md:text-lg text-white leading-relaxed text-left sm:text-justify font-medium">
						"Пример темы: создание сайта-памятки при сигнале «Внимание всем» или разработка серии брошюр по безопасности. Важно, чтобы человек в стрессовой ситуации смог быстро считать информацию благодаря твоему проекту."
					</div>
				</div>

				<div class="relative z-10 mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 flex items-center justify-between text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider text-white/90">
					<span>Проект со смыслом</span>
					<i class="ri-focus-2-line text-sm sm:text-base text-white/90"></i>
				</div>
			</div>
		</div>
	</div>
</section>
