<script lang="ts">
	import dayjs from 'dayjs';

	import Codeblock from '~/components/Codeblock.svelte';
	import PageHeading from '~/components/PageHeading.svelte';

	import { snippets } from '~/snippets/writing/type-safe-atomic-css';
</script>

<PageHeading title="Type-Safe Atomic CSS" goBackConfig={{ href: '/writing' }}>
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
	So what is happening here? Well, the <code class="inline">style</code> function takes the provided
	style and computes a class and appends the style to the stylesheet. The result, is a class that we
	can now pass to our svelte button component like so.
</p>

<Codeblock language="svelte" code={snippets.buttonWithStyle} />

<p>This is cool and all, but where's the atomic css?</p>

<hr class="separator" />

<h2>Sprinkles</h2>

<p>
	Vanilla extract offers their own implementation of atomic css called <a
		href="https://vanilla-extract.style/documentation/sprinkles-api/">sprinkles</a
	>. Sprinkles allow you to create type safe atomic css classes that you can then attach to your
	elements via the <code class="inline">class</code> attribute. The API for consuming sprinkles looks
	like the following.
</p>

<Codeblock language="svelte" code={snippets.buttonWithSprinkles} />

<p>
	This will produce a hashed class name that maps to a background color style. However, there are
	many people that prefer the more traditional atomic css API, where you define a set of readable
	class names that map to specific styles. How could we do that with vanilla-extract?
</p>

<hr class="separator" />

<h2>Type-Safe Atomic CSS</h2>

<p>
	Vanilla-extract provides a function called <a
		href="https://vanilla-extract.style/documentation/styling-api/#globalstyle">globalStyle</a
	>
	that allows us to create a style that lives in the global style sheet that targets any selector we
	choose. We can use <code class="inline">globalStyle</code> to dynamically generate type-safe atomic
	css classes.
</p>

<p>
	Creating a <code class="inline">globalStyle</code> looks like the following:
</p>

<Codeblock code={snippets.atomicBackground} />

<p>
	This will place a global style with the class name <code class="inline">bg-red</code> which
	applies the background color of <code class="inline">red</code>.
</p>

<p>At this point you might be wondering, where is the type saftey you were refering to?</p>

<p>
	With a little bit of extra code, we can genericize this process and enable the ability to create
	any atomic css we want using <code class="inline">globalStyle</code>. Let's start by defining
	some types in our <code class="inline">utilities.css.ts</code>
</p>

<Codeblock code={snippets.atomicTypes} />

<p>
	Here we are defining a type called <code class="inline">AtomicClassDefinition</code> which
	defines a property with a key as a string and vanilla-extracts
	<code class="inline">StyleRule</code>
	type as the value. <code class="inline">GetKeys</code> is a helper type that will extract the
	keys into a union type. Finally, <code class="inline">GetKeysFromArray</code> is a nifty
	conditional type that loops through an array of
	<code class="inline">AtomicClassDefinition</code> to create a union type. This will eventually be
	the union type we use to assert type-safety.
</p>

<p>Alright, lets now define the function that does all of the work.</p>

<Codeblock code={snippets.createAtomicFunction} />

<p>
	This function takes any number of <code class="inline">AtomicClassDefinition</code> and produces
	a <code class="inline">globalStyle</code> for each of the style definitions. It is important to note
	that the key of the style in the object becomes the desired class name.
</p>

<p>
	Now that we have the brunt of the work done. Let's use the <code class="inline"
		>createUtilities</code
	> function to define a set of utility classes.
</p>

<Codeblock code={snippets.atomicClassDefinition} />

<p>
	Finally, lets define a function in a file that doesn't have <code class="inline">.css.ts</code> as
	the file type. The reason we need to do this is because vanilla-extract doesn't allow us to export
	functions from those files. This function will assert the union type on the arguments and ensure
	the type-safety.
</p>

<Codeblock code={snippets.atomicClassFunction} />

<p>
	Now we can put it all together and use our newly created <code class="inline">utilities</code> function
	to apply styles to any element.
</p>

<Codeblock language="svelte" code={snippets.example} />

<hr class="separator" />

<h2>The Good and the Bad</h2>

<p>
	As with any solution there are always pros and cons and it is important to understand the use
	case for your users.
</p>
