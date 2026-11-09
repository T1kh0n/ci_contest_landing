<script lang="ts">
	type OrbVariant = 'coral' | 'purple' | 'fusion' | 'glass';
	type OrbAnimation = 'float' | 'float-slow' | 'bubble' | 'none';

	export let variant: OrbVariant = 'fusion';
	export let animation: OrbAnimation = 'float';
	export let size: string = 'w-24 h-24';
	export let className: string = '';

	const variantClasses: Record<OrbVariant, string> = {
		coral: 'orb-3d-coral',
		purple: 'orb-3d-purple',
		fusion: 'orb-3d-fusion',
		glass: 'bubble-3d-glass'
	};

	const animationClasses: Record<OrbAnimation, string> = {
		float: 'animate-float-3d',
		'float-slow': 'animate-float-3d-slow',
		bubble: 'animate-float-bubble',
		none: ''
	};
</script>

<div
	class="shrink-0 select-none pointer-events-none {size} {variantClasses[variant]} {animationClasses[animation]} {className}"
	style="transform-style: preserve-3d;"
>
	<div class="bubble-highlight"></div>
	{#if variant === 'glass' || variant === 'fusion'}
		<div class="bubble-rim-light"></div>
	{/if}
</div>
