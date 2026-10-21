<script lang="ts">
	import { asset } from '$app/paths';
	const year = new Date().getFullYear();
</script>

<footer class="py-10 sm:py-14 md:py-16 bg-[#18181b] text-white relative overflow-hidden">
	<div class="absolute top-0 left-0 right-0 h-1" style="background: linear-gradient(90deg, #e08383 0%, #bda1c7 50%, #9c6b98 100%);"></div>

	<div class="container relative z-10">
		<div class="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-white/70">
			<div class="flex items-center gap-3">
				<img src={asset('/svg/company-logo.svg')} alt="" class="h-7 sm:h-8 w-auto brightness-200 opacity-80" />
				<span>© {year} Конкурс «КИ в РФ»</span>
			</div>
			<div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-display font-medium text-[11px] sm:text-xs uppercase tracking-wider text-white/80">
				<a href="#application" class="hover:text-[var(--color-accent)] transition-colors py-1">Подать заявку</a>
				<a href="#faq" class="hover:text-[var(--color-accent)] transition-colors py-1">FAQ</a>
				<a href="#rkn" class="hover:text-[var(--color-accent)] transition-colors py-1">Правовая информация</a>
			</div>
		</div>
	</div>
</footer>
