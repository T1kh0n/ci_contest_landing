<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import Button from '../ui/Button.svelte';
	import GlassOrb from '../ui/GlassOrb.svelte';

	const data = ContestService.getInstance().getData();
</script>

<section class="section-block relative pt-[calc(var(--height-header)+1rem)] sm:pt-[calc(var(--height-header)+2.5rem)] pb-12 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-[var(--color-bg-soft)] to-white scroll-fade-section is-visible">
	<div class="absolute inset-0 studio-grid pointer-events-none opacity-80"></div>

	<!-- Мягкие фоновые световые пятна (адаптированы под мобильные) -->
	<div class="absolute top-1/4 -left-16 sm:-left-20 w-64 sm:w-[clamp(18rem,45vw,36rem)] h-64 sm:h-[clamp(18rem,45vw,36rem)] rounded-full blur-[70px] sm:blur-[110px] pointer-events-none animate-float-slow" style="background: radial-gradient(circle, rgba(224, 131, 131, 0.28) 0%, rgba(224, 131, 131, 0) 70%);"></div>
	<div class="absolute top-1/3 -right-16 sm:-right-20 w-60 sm:w-[clamp(16rem,40vw,32rem)] h-60 sm:h-[clamp(16rem,40vw,32rem)] rounded-full blur-[65px] sm:blur-[100px] pointer-events-none animate-float-reverse" style="background: radial-gradient(circle, rgba(156, 107, 152, 0.24) 0%, rgba(156, 107, 152, 0) 70%);"></div>

	<!-- 3D ОБЪЕКТЫ: СФЕРЫ И СТЕКЛЯННЫЕ ПУЗЫРИ (видимы и на мобильных, и на десктопах) -->
	<!-- Главная сфера: на десктопе крупная справа, на мобильном видна в верхнем правом углу фона -->
	<div class="absolute right-[-1.5rem] sm:right-[4%] top-[10%] sm:top-[14%] pointer-events-none z-0 opacity-80 sm:opacity-90">
		<GlassOrb variant="fusion" size="w-36 h-36 sm:w-72 sm:h-72 xl:w-88 xl:h-88" animation="float" />
	</div>

	<!-- Стеклянный пузырь поверх сферы -->
	<div class="absolute right-[12%] sm:right-[16%] top-[24%] sm:top-[34%] pointer-events-none z-10 opacity-75 sm:opacity-85">
		<GlassOrb variant="glass" size="w-16 h-16 sm:w-36 sm:h-36" animation="bubble" />
	</div>

	<!-- Коралловая 3D сфера: на мобилке вверху слева, на десктопе по центру справа -->
	<div class="absolute -left-4 sm:left-auto sm:right-[28%] top-[14%] sm:top-[12%] pointer-events-none z-0 opacity-70 sm:opacity-80">
		<GlassOrb variant="coral" size="w-14 h-14 sm:w-24 sm:h-24" animation="float-slow" />
	</div>

	<!-- Лиловый пузырь слева от контента -->
	<div class="absolute -left-6 sm:-left-8 top-[46%] sm:top-[38%] pointer-events-none z-0 opacity-60 sm:opacity-70">
		<GlassOrb variant="purple" size="w-16 h-16 sm:w-28 sm:h-28" animation="float-slow" />
	</div>

	<!-- Небольшие парящие пузыри -->
	<div class="absolute right-[4%] sm:right-[8%] top-[56%] pointer-events-none z-10 opacity-70 sm:opacity-85">
		<GlassOrb variant="glass" size="w-12 h-12 sm:w-20 sm:h-20" animation="float" />
	</div>

	<svg class="absolute inset-0 w-full h-full pointer-events-none opacity-[0.20] stroke-current text-[#bda1c7]" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="crosshair-pattern" width="96" height="96" patternUnits="userSpaceOnUse">
				<path d="M48 44v8M44 48h8" stroke-width="1.2" stroke-linecap="round" />
				<circle cx="48" cy="48" r="1.5" fill="none" stroke-width="0.75" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#crosshair-pattern)" />
	</svg>

	<div class="container relative z-10">
		<div class="max-w-4xl text-left">
			<div class="anim-enter-1 inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full glass-pill text-[var(--color-accent-deep)] font-display font-bold text-[11px] sm:text-sm uppercase tracking-wider mb-5 sm:mb-8 max-w-full">
				<i class="ri-sparkling-fill text-xs sm:text-sm shrink-0 text-[var(--color-accent-dark)]"></i>
				<span class="truncate">{data.subtitle}</span>
			</div>

			<div class="anim-enter-2 relative mb-5 sm:mb-8 w-fit max-w-full">
				<h1 class="w-fit font-display font-black uppercase text-[#1a1a1a] select-none leading-none">
					<span class="block text-[clamp(2.15rem,6.7vw,5.25rem)] tracking-[0.05em] mr-[-0.05em] leading-[0.96] whitespace-nowrap">КИ В</span>
					<span class="block text-[clamp(3.5rem,11vw,8.65rem)] tracking-[0.01em] mr-[-0.01em] leading-[0.92] whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-dark)] via-[var(--color-accent-deep)] to-[#b04a4a]">РФ</span>
				</h1>
			</div>

			<p class="anim-enter-3 text-sm sm:text-lg md:text-xl text-[var(--color-text-muted)] mb-6 sm:mb-10 text-left sm:text-justify max-w-2xl leading-relaxed">
				{data.description}
			</p>

			<div class="anim-enter-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
				<Button href="#application">Подать заявку</Button>
				<Button href="#about" variant="secondary">Узнать подробнее</Button>
			</div>
		</div>

		<!-- Карточки статистики с эффектом матового стекла (Glassmorphism) -->
		<div class="anim-enter-5 mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
			<div class="p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-card relative overflow-hidden group interactive-card">
				<div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[var(--color-accent)]/20 text-[var(--color-accent-deep)] flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
					<i class="ri-user-smile-line text-lg sm:text-xl leading-none"></i>
				</div>
				<div class="font-display font-extrabold text-xl sm:text-3xl text-[#1a1a1a] mb-0.5 sm:mb-1">100%</div>
				<div class="text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Для студентов</div>
			</div>

			<div class="p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-card relative overflow-hidden group interactive-card">
				<div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl text-white flex items-center justify-center mb-2.5 sm:mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%);">
					<i class="ri-graduation-cap-line text-lg sm:text-xl leading-none"></i>
				</div>
				<div class="font-display font-extrabold text-xl sm:text-3xl text-[#1a1a1a] mb-0.5 sm:mb-1">СПО и ВУЗЫ</div>
				<div class="text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Все специальности</div>
			</div>

			<div class="p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-card relative overflow-hidden group interactive-card">
				<div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-[var(--color-accent)]/20 text-[var(--color-accent-deep)] flex items-center justify-center mb-2.5 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
					<svg width="20" height="20" class="sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="9.5" />
						<path d="M9.5 6.5h4a2.7 2.7 0 0 1 0 5.4H9.5" />
						<path d="M8 15h5" />
						<path d="M9.5 6.5v11" />
					</svg>
				</div>
				<div class="font-display font-extrabold text-xl sm:text-3xl text-[#1a1a1a] mb-0.5 sm:mb-1">0 ₽</div>
				<div class="text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Бесплатное участие</div>
			</div>

			<div class="p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-card relative overflow-hidden group interactive-card">
				<div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl text-white flex items-center justify-center mb-2.5 sm:mb-3 shadow-sm transition-transform duration-300 group-hover:scale-110" style="background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%);">
					<i class="ri-global-line text-lg sm:text-xl leading-none"></i>
				</div>
				<div class="font-display font-extrabold text-xl sm:text-3xl text-[#1a1a1a] mb-0.5 sm:mb-1">Вся РФ</div>
				<div class="text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Масштаб проекта</div>
			</div>
		</div>
	</div>
</section>
