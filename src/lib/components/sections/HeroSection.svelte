<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import Button from '../ui/Button.svelte';

	const data = ContestService.getInstance().getData();
</script>

<section class="section-block relative pt-[calc(var(--height-header)+1.5rem)] sm:pt-[calc(var(--height-header)+2.5rem)] pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-[var(--color-bg-soft)] to-white">
	<div class="absolute inset-0 studio-grid pointer-events-none opacity-80"></div>

	<div class="absolute top-1/4 -left-20 w-[clamp(18rem,45vw,36rem)] h-[clamp(18rem,45vw,36rem)] rounded-full blur-[90px] md:blur-[130px] pointer-events-none animate-float-slow" style="background: radial-gradient(circle, rgba(224, 131, 131, 0.28) 0%, rgba(224, 131, 131, 0) 70%);"></div>
	<div class="absolute top-1/3 -right-20 w-[clamp(16rem,40vw,32rem)] h-[clamp(16rem,40vw,32rem)] rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-float-reverse" style="background: radial-gradient(circle, rgba(156, 107, 152, 0.24) 0%, rgba(156, 107, 152, 0) 70%);"></div>

	<svg class="absolute inset-0 w-full h-full pointer-events-none opacity-[0.22] stroke-current text-[#bda1c7]" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="crosshair-pattern" width="96" height="96" patternUnits="userSpaceOnUse">
				<path d="M48 44v8M44 48h8" stroke-width="1.2" stroke-linecap="round" />
				<circle cx="48" cy="48" r="1.5" fill="none" stroke-width="0.75" />
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill="url(#crosshair-pattern)" />
	</svg>

	<div class="absolute right-4 sm:right-10 top-1/4 w-32 sm:w-64 h-32 sm:h-64 pointer-events-none opacity-20 hidden md:block">
		<svg viewBox="0 0 200 200" fill="none" class="w-full h-full">
			<circle cx="100" cy="100" r="90" stroke="#9c6b98" stroke-width="1" stroke-dasharray="4 4" />
			<circle cx="100" cy="100" r="50" stroke="#e08383" stroke-width="1.5" />
			<path d="M100 0v200M0 100h200" stroke="#9c6b98" stroke-width="0.75" stroke-dasharray="2 6" />
		</svg>
	</div>

	<div class="container relative z-10">
		<div class="max-w-4xl text-left animate-fade-up">
			<div class="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/95 shadow-sm border border-[var(--color-accent)]/40 text-[var(--color-accent-deep)] font-display font-bold text-xs sm:text-sm uppercase tracking-wider mb-6 sm:mb-8 backdrop-blur-sm max-w-full">
				<span class="text-sm shrink-0">✦</span>
				<span class="truncate">{data.subtitle}</span>
			</div>

			<div class="relative mb-6 sm:mb-8 w-fit max-w-full">
				<h1 class="w-fit font-display font-black uppercase text-[#1a1a1a] select-none leading-none">
					<span class="block text-[clamp(2.25rem,6.7vw,5.25rem)] tracking-[0.05em] mr-[-0.05em] leading-[0.96] whitespace-nowrap">КИ В</span>
					<span class="block text-[clamp(3.7rem,11vw,8.65rem)] tracking-[0.01em] mr-[-0.01em] leading-[0.92] whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-dark)] via-[var(--color-accent-deep)] to-[#b04a4a]">РФ</span>
				</h1>
				<div class="absolute -top-3 -right-4 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 border-t-2 border-r-2 border-[#bda1c7]/40 rounded-tr-xl pointer-events-none"></div>
			</div>

			<p class="text-base sm:text-lg md:text-xl text-[var(--color-text-muted)] mb-8 sm:mb-10 text-left sm:text-justify max-w-2xl leading-relaxed">
				{data.description}
			</p>

			<div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
				<Button href="#application">Подать заявку</Button>
				<Button href="#about" variant="secondary">Узнать подробнее</Button>
			</div>
		</div>
	</div>
</section>
