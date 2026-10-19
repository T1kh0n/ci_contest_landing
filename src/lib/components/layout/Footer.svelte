<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-black/5 py-10 bg-white">
	<div class="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[var(--color-text-muted)]">
		<div class="flex items-center gap-3">
			<img src="/svg/company-logo.svg" alt="" class="h-8 w-auto grayscale opacity-50" />
			<span>© {year} Конкурс «КИ в РФ»</span>
		</div>
		<div class="flex items-center gap-6">
			<a href="#application" class="hover:text-black transition-colors">Подать заявку</a>
			<a href="#faq" class="hover:text-black transition-colors">FAQ</a>
			<a href="#rkn" class="hover:text-black transition-colors">Правовая информация</a>
		</div>
	</div>
</footer>
