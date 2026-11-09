<script lang="ts">
	import SectionTitle from '../ui/SectionTitle.svelte';
	import GlassOrb from '../ui/GlassOrb.svelte';
</script>

<section id="rkn" class="section-block bg-white relative overflow-hidden scroll-fade-section is-visible">
	<!-- 3D Декоративные объекты (видны на всех экранах) -->
	<div class="absolute -right-3 sm:right-[10%] top-[20%] sm:top-[30%] pointer-events-none z-0 opacity-70">
		<GlassOrb variant="glass" size="w-16 h-16 sm:w-24 sm:h-24" animation="bubble" />
	</div>

	<div class="container relative z-10">
		<SectionTitle
			eyebrow="Правовая информация"
			title="Соответствие требованиям законодательства"
			description="Сайт и конкурс зарегистрированы в соответствии с нормами РФ."
		/>
		
		<div class="max-w-3xl glass-panel p-5 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2.5rem] text-xs sm:text-sm text-[var(--color-text-muted)] space-y-3 sm:space-y-4 text-left sm:text-justify relative interactive-card shadow-lg sm:shadow-xl">
			<p><strong>Организатор:</strong> ГБПОУ «Колледж креативных индустрий»</p>
			<p><strong>ИНН:</strong> 0000000000 | <strong>ОГРН:</strong> 0000000000000</p>
			<p><strong>Юридический адрес:</strong> 000000, г. Москва, ул. Примерная, д. 1</p>
			<p><strong>Регистрация в Роскомнадзоре:</strong> Сайт и обработка персональных данных осуществляются в соответствии с Федеральным законом №152-ФЗ «О персональных данных». Номер в реестре операторов: № 00-0000000.</p>
			<p>Отправляя заявку, ты даешь согласие на обработку персональных данных (ФИО, место обучения, контакты) исключительно в целях проведения конкурса.</p>
		</div>
	</div>
</section>
