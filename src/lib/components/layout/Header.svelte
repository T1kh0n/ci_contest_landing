<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import { resolve, asset } from '$app/paths';
	import Button from '../ui/Button.svelte';

	const nav = ContestService.getInstance().getData().nav;
	let menuOpen = false;
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
	<div class="container flex items-center justify-between" style="height: var(--height-header);">
		<a href={resolve('/')} class="flex items-center gap-2 shrink-0">
			<img src={asset('/svg/company-logo.svg')} alt="Логотип" class="h-8 w-auto" />
			<span class="hidden sm:inline font-extrabold text-lg tracking-tight">КИ в РФ</span>
		</a>

		<nav class="hidden lg:flex items-center gap-8">
			{#each nav as item}
				<a href={item.href} class="text-sm font-semibold text-black/70 hover:text-[var(--color-accent-dark)] transition-colors">
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden lg:block">
			<Button href="#application">Подать заявку</Button>
		</div>

		<button
			class="lg:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
			aria-label="Открыть меню"
			on:click={() => (menuOpen = !menuOpen)}
		>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
				{#if menuOpen}
					<line x1="6" y1="6" x2="18" y2="18" />
					<line x1="18" y1="6" x2="6" y2="18" />
				{:else}
					<line x1="4" y1="7" x2="20" y2="7" />
					<line x1="4" y1="12" x2="20" y2="12" />
					<line x1="4" y1="17" x2="20" y2="17" />
				{/if}
			</svg>
		</button>
	</div>

	{#if menuOpen}
		<div class="lg:hidden border-t border-black/5 bg-white shadow-xl absolute top-[var(--height-header)] left-0 right-0">
			<nav class="container flex flex-col gap-2 py-6">
				{#each nav as item}
					<a
						href={item.href}
						class="py-2 text-base font-semibold text-black/80 hover:text-[var(--color-accent-dark)]"
						on:click={() => (menuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
				<div class="pt-4">
					<Button href="#application" fullWidth>Подать заявку</Button>
				</div>
			</nav>
		</div>
	{/if}
</header>
