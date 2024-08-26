<script lang="ts">
	import { WhatsApp, Facebook, X } from 'svelte-share-buttons-component';

	export let data; // Data from the server-side
	const { matchedArticle } = data;
	const { shortUrl } = data;

	const url = matchedArticle.url;
	const title = matchedArticle.title;
	const short_url = shortUrl;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={matchedArticle.description} />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={matchedArticle.description} />
	<meta property="og:image" content={matchedArticle.urlToImage} />
	<meta property="og:url" content={url} />
</svelte:head>

<article>
	<h1>{matchedArticle.title}</h1>
	<img src={matchedArticle.urlToImage} alt={matchedArticle.title} />
	<p>{matchedArticle.description}</p>
	<a href={matchedArticle.url} target="_blank">More about the news</a>
</article>

<div class="buttons">
	<h3>Share the news</h3>
	<Facebook class="share-button" quote={title} {url} />
	<WhatsApp class="share-button" text="{title} {short_url}" />
	<X class="share-button" text={title} {url} />
</div>

<style>
	article {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		text-align: center;
	}
	img {
		max-width: 100%;
		height: auto;
	}
	p {
		font-size: 18px;
	}
	h3 {
		margin: 0;
	}
	a {
		text-decoration: none;
		color: white;
		background-color: #333;
		padding: 10px;
		margin-top: 20px;
		display: inline-block;
	}
	a:hover {
		color: gray;
	}

	.buttons {
		margin-left: 70%;
		text-align: center;
		margin-bottom: 20px;
	}
</style>
