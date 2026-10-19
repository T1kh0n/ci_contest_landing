<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import HeroSection from '$lib/components/sections/HeroSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ApplicationSection from '$lib/components/sections/ApplicationSection.svelte';
	import YandexDiskGuide from '$lib/components/sections/YandexDiskGuide.svelte';
	import FaqSection from '$lib/components/sections/FaqSection.svelte';
	import RknSection from '$lib/components/sections/RknSection.svelte';
</script>

<Header />
<main class="pt-[var(--height-header)]">
	<HeroSection />
	<AboutSection />
	<ApplicationSection />
	<YandexDiskGuide />
	<FaqSection />
	<RknSection />
</main>
<Footer />
