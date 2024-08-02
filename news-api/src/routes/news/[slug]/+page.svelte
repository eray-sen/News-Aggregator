<script>
	export let data; // Data from the server-side
	const { matchedArticle } = data;
	const { apiKey2 } = data;

	/**
	 * @param {string} service
	 */
	function handleShareButtonClick(service) {
		const apiKey = apiKey2;
		const link = matchedArticle.url;
		const title = matchedArticle.title;
		const shareUrl = `https://www.shareaholic.com/api/share/?v=1&apitype=1&apikey=${apiKey}&service=${service}&link=${link}&title=${title}`;

		window.open(shareUrl, '_blank');
	}
</script>

<article>
	<h1>{matchedArticle.title}</h1>
	<img src={matchedArticle.urlToImage} alt={matchedArticle.title} />
	<p>{matchedArticle.description}</p>
	<a href={matchedArticle.url} target="_blank">More about the news</a>
</article>

<div class="buttons">
	<h3>Share the news</h3>
	<button id="facebook" on:click={() => handleShareButtonClick('facebook')}>Facebook</button>
	<button id="x" on:click={() => handleShareButtonClick('x')}>Twitter</button>
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
	button {
		margin-top: 20px;
		padding: 10px 20px;
		background-color: #4267b2;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background-color: #365899;
	}
	.buttons {
		margin-left: 70%;
		text-align: center;
		margin-bottom: 20px;
	}
	#x {
		background-color: #1da1f2;
		color: black;
		border-radius: 20px;
	}
	#facebook {
		background-color: #1877f2;
		border-radius: 20px;
	}
</style>
