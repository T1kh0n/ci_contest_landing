<script lang="ts">
	import type { NavItem } from '#lib/models/NavItem';

	export let item: NavItem;
</script>

<a
	href={item.href}
	class="text-[0.9375rem] font-medium text-black/70 hover:text-black transition-colors"
>
	{item.label}
</a>
