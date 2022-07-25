<script lang="ts">
	import dayjs from 'dayjs';

	import Codeblock from '~/components/Codeblock.svelte';
	import PageHeading from '~/components/PageHeading.svelte';

	import { snippets } from '~/snippets/writing/atomic-css-with-vanilla-extract';
</script>

<PageHeading title="Atomic CSS with Vanilla Extract" goBackConfig={{ href: '/writing' }}>
	<svelte:fragment slot="description">
		{dayjs(new Date(2022, 6, 24)).format('MMMM DD, YYYY')}
	</svelte:fragment>
</PageHeading>

<p>
	As frontend developers, we have to constantly keep up with the times and innovations in our
	space. One of the innovations that has come in the last couple years is CSS-in-JS. It has
	completely changed the way that we work with CSS in our projects. Specifically, React projects.
</p>

<p>
	It started with <a href="https://emotion.sh/docs/introduction">emotion</a> and
	<a href="https://styled-components.com/">styled-components</a>. However, over the years we as a
	collective community have started to recognize the performance impacts of the dynamic nature of
	those solutions.
</p>

<p>
	Enter, <a href="https://vanilla-extract.style/">vanilla extract</a>. A library that provides a
	lot of the same benefits that emotion and styled-components do, but results in css that is
	statically compiled at build time. Which means, no dynamic style generation and lookups at
	runtime. It feels very much like an extension of CSS or CSS modules but written in Typescript.
</p>

<p>
	Styling elements using vanilla-extract is easy. Say you have the following svelte button
	component.
</p>

<Codeblock language="svelte" code={snippets.button} />

<p>
	Applying style to this component can be done by creating a <code class="inline"
		>button.css.ts</code
	> file and adding the following style:
</p>

<Codeblock code={snippets.style} />

<p>
	So what is happening here? Well, the <code>style</code> function takes the provided style and computes
	a class and appends the style to the stylesheet. The result, is a class that we can now pass to our
	svelte button component like so.
</p>

<Codeblock language="svelte" code={snippets.buttonWithStyle} />
