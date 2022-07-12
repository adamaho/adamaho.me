<script lang="ts">
	import { lightbulb } from '~/stores/lightbulb';
</script>

<div class="writing-page" class:lightbulb-on={$lightbulb}>
	<h1>Writing</h1>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus dui augue, eu
		dapibus ex lacinia vitae. Vestibulum scelerisque gravida enim. Integer cursus turpis sit
		amet diam cursus maximus. Quisque non feugiat augue. Duis tempus at odio sed efficitur.
		Pellentesque maximus, mi ut aliquam volutpat, urna est tincidunt augue, non dictum eros
		lacus quis ante. Vivamus lobortis, justo ac interdum tincidunt, mauris erat volutpat turpis,
		nec tempus nunc tortor et erat. Mauris dapibus, justo et imperdiet cursus, elit mi malesuada
		neque, non iaculis elit lectus sed dui. Mauris elementum auctor nisl, tristique aliquet odio
		dignissim id. Duis pharetra tortor sit amet magna euismod pharetra. Donec maximus, dui vel
		eleifend scelerisque, purus felis auctor nulla, vitae laoreet risus mi ut odio. Nulla
		pulvinar scelerisque accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.
		In sit amet ultricies sem. Etiam tempus erat at turpis ultrices condimentum. Pellentesque
		eleifend faucibus malesuada.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus dui augue, eu
		dapibus ex lacinia vitae. Vestibulum scelerisque gravida enim. Integer cursus turpis sit
		amet diam cursus maximus. Quisque non feugiat augue. Duis tempus at odio sed efficitur.
		Pellentesque maximus, mi ut aliquam volutpat, urna est tincidunt augue, non dictum eros
		lacus quis ante. Vivamus lobortis, justo ac interdum tincidunt, mauris erat volutpat turpis,
		nec tempus nunc tortor et erat. Mauris dapibus, justo et imperdiet cursus, elit mi malesuada
		neque, non iaculis elit lectus sed dui. Mauris elementum auctor nisl, tristique aliquet odio
		dignissim id. Duis pharetra tortor sit amet magna euismod pharetra. Donec maximus, dui vel
		eleifend scelerisque, purus felis auctor nulla, vitae laoreet risus mi ut odio. Nulla
		pulvinar scelerisque accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus.
		In sit amet ultricies sem. Etiam tempus erat at turpis ultrices condimentum. Pellentesque
		eleifend faucibus malesuada.
	</p>
</div>

<style>
	.writing-page {
		opacity: 0.2;
		transition: opacity var(--aho-animation-speed-fast) ease;
	}

	.writing-page.lightbulb-on {
		opacity: 1;
	}
</style>
