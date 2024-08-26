<script>
	export let data;
	const { news } = data; /*destructuring assignment => data = data.article*/
	const { co } = data;
	const { ca } = data;
	let selectedCountry = co;
	let selectedCategory = ca;

	export let title = `News in ${selectedCountry.toUpperCase()} - ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`;
	export let description = `Get the latest ${selectedCategory} news from ${selectedCountry.toUpperCase()}. Stay informed with breaking news and updates.`;
	export let robots = 'index, follow';
	export let viewport = 'width=device-width, initial-scale=1.0';

	const fetchNews = async () => {
		window.location.search = `?country=${selectedCountry}&category=${selectedCategory}`; // Reload the page with the new country code.
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content={robots} />
	<meta name="viewport" content={viewport} />
</svelte:head>

<!-- This renders the rest of your page content -->
<div class="container">
	<div class="header">
		<h1>News</h1>
	</div>
	<div class="form-container">
		<form on:submit|preventDefault={fetchNews}>
			<label for="countries">Country </label>
			<select id="countries" bind:value={selectedCountry}>
				<option value="ae"> Arab Emirates</option>
				<option value="ar">Argentina</option>
				<option value="at">Austria</option>
				<option value="au">Australia</option>
				<option value="be">Belgium</option>
				<option value="br">Brazil</option>
				<option value="ca">Canada</option>
				<option value="ch">Switzerland</option>
				<option value="cn">China</option>
				<option value="co">Colombia</option>
				<option value="cz">Czech</option>
				<option value="de">Germany</option>
				<option value="eg">England</option>
				<option value="fr">France</option>
				<option value="gr">Greece</option>
				<option value="hu">Hungary</option>
				<option value="ie">Ireland</option>
				<option value="il">Israil</option>
				<option value="it">Italy</option>
				<option value="jp">Japan</option>
				<option value="nl">Netherlands</option>
				<option value="no">Norway</option>
				<option value="pl">Poland</option>
				<option value="pt">Portugal</option>
				<option value="ru">Russia</option>
				<option value="tr">Turkiye</option>
				<option value="ua">Ukraine</option>
				<option value="us">USA</option>
			</select>
			<label for="categories">Category</label>
			<select id="categories" bind:value={selectedCategory}>
				<option value="business">Business</option>
				<option value="entertainment">Entertainment</option>
				<option value="general">General</option>
				<option value="health">Health</option>
				<option value="science">Science</option>
				<option value="sports">Sports</option>,
				<option value="technology">Technology</option>
			</select>

			<button type="submit">Get News</button>
		</form>
	</div>
</div>
<div class="news-container">
	{#each news as item}
		<div class="news-item">
			<a
				href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}/?country=${selectedCountry}&category=${selectedCategory}`}
			>
				<img src={item.urlToImage} alt={item.title} />
				<h3>{item.title}</h3>
			</a>
			<!-- the selected country and category are added to the URL to fetch more specific news from the api server via /news/[slug].page.server.ts to match the content of the selected news  -->
		</div>
	{/each}
</div>

<style>
	h1 {
		text-align: left; /* Aligns the header to the left */
	}

	.news-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		padding: 20px;
	}

	.news-item {
		border: 1px solid #ddd;
		padding: 10px;
		text-align: center;
		background-color: rgb(255, 243, 228);
	}

	.news-item img {
		max-width: 100%;
		height: auto;
	}

	.news-item h3 {
		margin: 10px 0 0;
		color: black;
	}

	.news-item a {
		text-decoration: none;
	}
	.news-item h3:hover {
		color: rgb(71, 71, 71);
	}
	.header {
		width: 10%;
	}
	.container {
		display: flex;
		margin-top: 10px;
	}
	.form-container {
		width: 90%;
		display: flex;
		justify-content: center; /* Horizontally averaged */
		margin-right: 8%;
	}

	form {
		background-color: #333;
		color: white;
		padding: 1rem;
		text-align: center;
	}
	label {
		margin-top: 20px;
	}
	select {
		margin-right: 20px;
	}

	button {
		border-radius: 4px;
		margin-top: 20px;
		text-align: center;
	}

	button:hover {
		background-color: #ddd;
		cursor: pointer;
	}
</style>
