<script lang="ts">
	import SectionTitle from '../ui/SectionTitle.svelte';
	import GlassOrb from '../ui/GlassOrb.svelte';
</script>

<section id="video" class="section-block bg-white relative overflow-hidden scroll-fade-section is-visible">
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(18rem,50vw,42rem)] h-[clamp(14rem,35vw,26rem)] rounded-full blur-[110px] pointer-events-none"
		style="background: radial-gradient(circle, rgba(156, 107, 152, 0.22) 0%, rgba(224, 131, 131, 0.15) 50%, transparent 75%);"
	></div>

	<!-- 3D Декоративные объекты -->
	<div class="absolute left-[5%] top-[20%] pointer-events-none hidden lg:block z-0 opacity-80">
		<GlassOrb variant="coral" size="w-24 h-24" animation="float" />
	</div>
	<div class="absolute right-[6%] bottom-[15%] pointer-events-none hidden md:block z-0 opacity-85">
		<GlassOrb variant="fusion" size="w-36 h-36" animation="float-slow" />
	</div>

	<div class="container relative z-10">
		<SectionTitle
			eyebrow="Видео о конкурсе"
			title="Узнай больше о проекте"
			description="Посмотри видеоматериал, чтобы познакомиться с атмосферой конкурса, узнать о защите проектов и возможностях для участников."
			theme="secondary"
		/>

		<div class="max-w-4xl mx-auto relative">
			<div class="relative rounded-[2rem] sm:rounded-[2.5rem] p-2.5 sm:p-4 glass-panel shadow-2xl transition-all duration-300 hover:shadow-[0_24px_60px_rgba(156,107,152,0.22)] interactive-card">
				<div class="relative w-full aspect-video rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-black/5 shadow-inner border border-white/50">
					<iframe
						src="https://vkvideo.ru/video_ext.php?oid=-218905599&id=456239761&hash=ec67c7fbef789857&hd=3"
						class="w-full h-full border-0"
						title="Видео о конкурсе КИ в РФ в VK Видео"
						allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
						allowfullscreen
						loading="lazy"
					></iframe>
				</div>

				<div class="mt-4 sm:mt-5 px-2 sm:px-4 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm shrink-0" style="background: linear-gradient(135deg, #d8c2dd 0%, #bda1c7 45%, #9c6b98 100%);">
							<i class="ri-play-circle-line text-2xl leading-none"></i>
						</div>
						<div>
							<div class="font-display font-black text-sm sm:text-base text-[#1a1a1a] uppercase tracking-tight">Творчество и инновации</div>
							<div class="text-xs text-[var(--color-text-muted)]">Официальный ролик в VK Видео</div>
						</div>
					</div>

					<a
						href="https://vkvideo.ru/video-218905599_456239761"
						target="_blank"
						rel="noopener noreferrer"
						class="btn-cta btn-secondary flex items-center gap-2 text-xs sm:text-sm py-2.5 px-5 self-stretch sm:self-auto justify-center"
					>
						<i class="ri-external-link-line text-base leading-none"></i>
						<span>Смотреть в VK Видео</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
