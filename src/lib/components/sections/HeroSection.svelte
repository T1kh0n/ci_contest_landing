<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import Button from '../ui/Button.svelte';

	const data = ContestService.getInstance().getData();
</script>

<section class="section-block relative pt-[var(--height-header)] overflow-hidden bg-[var(--color-bg-soft)]">
	<div class="absolute inset-0 z-0">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[100px]"></div>
		<div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e0baba]/30 rounded-full blur-[100px]"></div>
	</div>

	<div class="container relative z-10">
		<div class="max-w-3xl text-left animate-fade-up">
			<span class="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-black/5 text-[var(--color-accent-dark)] font-bold text-sm mb-8">
				{data.subtitle}
			</span>
			<h1 class="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
				<span class="block">КИ В</span>
				<span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#e08383] to-[#c96060]">РФ</span>
			</h1>
			<p class="text-lg md:text-xl text-[var(--color-text-muted)] mb-10 text-justify">
				{data.description}
			</p>
			<div class="flex flex-col sm:flex-row items-start gap-4">
				<Button href="#application">Подать заявку</Button>
				<Button href="#about" variant="secondary">Узнать подробнее</Button>
			</div>
		</div>
	</div>
</section>
