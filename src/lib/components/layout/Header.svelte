<script lang="ts">
	import { ContestService } from '#lib/services/ContestService';
	import { resolve, asset } from '$app/paths';
	import Button from '../ui/Button.svelte';

	const nav = ContestService.getInstance().getData().nav;
	let menuOpen = false;

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/80 shadow-[0_8px_30px_rgba(156,107,152,0.06)] anim-enter-header transition-all">
	<div class="container flex items-center justify-between" style="height: var(--height-header);">
		<a href={resolve('/')} class="flex items-center gap-2.5 sm:gap-3 shrink-0 focus:outline-none group" on:click={closeMenu}>
			<div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl glass-card flex items-center justify-center p-2 shadow-sm transition-transform duration-200 group-hover:scale-105 active:scale-95">
				<img src={asset('/svg/company-logo.svg')} alt="Логотип" class="h-5 sm:h-6 w-auto" />
			</div>
			<span class="font-display font-black text-base sm:text-lg tracking-tight uppercase text-[#1a1a1a]">КИ в РФ</span>
		</a>

		<nav class="hidden lg:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full">
			{#each nav as item}
				<a
					href={item.href}
					class="px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-black/70 hover:text-[var(--color-accent-deep)] hover:bg-white/90 rounded-full transition-all duration-200"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="hidden lg:block shrink-0">
			<Button href="#application">Подать заявку</Button>
		</div>

		<button
			type="button"
			class="lg:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-2xl glass-card text-black/80 transition-all flex items-center justify-center active:scale-95 touch-manipulation cursor-pointer"
			aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
			aria-expanded={menuOpen}
			on:click={() => (menuOpen = !menuOpen)}
		>
			{#if menuOpen}
				<i class="ri-close-line text-xl leading-none"></i>
			{:else}
				<i class="ri-menu-line text-xl leading-none"></i>
			{/if}
		</button>
	</div>

	{#if menuOpen}
		<button
			type="button"
			class="lg:hidden fixed inset-x-0 top-[var(--height-header)] bottom-0 bg-black/30 backdrop-blur-md z-40 w-full text-left border-none cursor-default"
			on:click={closeMenu}
			on:keydown={(e) => e.key === 'Escape' && closeMenu()}
			aria-label="Закрыть меню навигации"
		>
			<div
				class="bg-white/85 backdrop-blur-2xl border-b border-white/80 shadow-2xl p-6 flex flex-col gap-3 max-h-[80vh] overflow-y-auto cursor-auto"
				tabindex="-1"
				role="dialog"
				aria-modal="true"
				on:click|stopPropagation
				on:keydown|stopPropagation
			>
				<nav class="flex flex-col gap-1.5">
					{#each nav as item}
						<a
							href={item.href}
							class="py-3 px-4 rounded-2xl text-sm font-display font-bold uppercase tracking-wider text-black/80 hover:bg-white/80 hover:text-[var(--color-accent-deep)] transition-colors active:bg-white"
							on:click={closeMenu}
						>
							{item.label}
						</a>
					{/each}
				</nav>
				<div class="pt-3 border-t border-[var(--color-accent)]/20">
					<Button href="#application" fullWidth on:click={closeMenu}>Подать заявку</Button>
				</div>
			</div>
		</button>
	{/if}
</header>
