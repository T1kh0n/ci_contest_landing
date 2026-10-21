<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '#lib/components/layout/Header.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import HeroSection from '#lib/components/sections/HeroSection.svelte';
	import AboutSection from '#lib/components/sections/AboutSection.svelte';
	import VideoSection from '#lib/components/sections/VideoSection.svelte';
	import ApplicationSection from '#lib/components/sections/ApplicationSection.svelte';
	import YandexDiskGuide from '#lib/components/sections/YandexDiskGuide.svelte';
	import FaqSection from '#lib/components/sections/FaqSection.svelte';
	import RknSection from '#lib/components/sections/RknSection.svelte';

	onMount(() => {
		const sections = document.querySelectorAll<HTMLElement>('.scroll-fade-section');
		if (!('IntersectionObserver' in window)) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						entry.target.classList.remove('is-offscreen');
					} else {
						entry.target.classList.remove('is-visible');
						entry.target.classList.add('is-offscreen');
					}
				});
			},
			{
				threshold: 0.08,
				rootMargin: '30px 0px 30px 0px'
			}
		);

		sections.forEach((sec) => observer.observe(sec));

		return () => {
			observer.disconnect();
		};
	});
</script>

<Header />
<main class="pt-[var(--height-header)]">
	<HeroSection />
	<AboutSection />
	<VideoSection />
	<ApplicationSection />
	<YandexDiskGuide />
	<FaqSection />
	<RknSection />
</main>
<Footer />
