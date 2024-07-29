<script>
	export let data;

	const { sources } = data;
	console.log(sources);
</script>

<h1>Sources</h1>

<div class="source-container">
	{#each sources as source}
		<div class="source-item">
			<a href={source.url}> <h3>{source.name}</h3></a>
			<p>{source.description}</p>
			<ul>
				<li>Category: {source.category}</li>
				<li>Country: {source.country}</li>
			</ul>
		</div>
	{/each}
</div>

<style>
	.source-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		padding: 20px;
	}

	.source-item {
		border: 1px solid #ddd;
		padding: 10px;
		text-align: center;
		background-color: rgb(255, 243, 228);
	}

	.source-item h3 {
		margin: 10px 0 0;
		background-color: #333;
		color: white;
	}

	.source-item a {
		text-decoration: none;
	}
	.source-item h3:hover {
		background-color: rgb(71, 71, 71);
	}
	.source-item ul {
		list-style: none;
		padding: 0;
		background-color: #333;
		color: white;
	}
	.source-item li {
		text-align: center;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
	.source-item p {
		padding-left: 40px;
		padding-right: 40px;
		font-size: 16px;
	}
	h1 {
		margin: 10px auto; /** sola dayalı olan başlığı ortaladık*/
		text-align: center;
		background-color: #333;
		color: white;
		width: 25%;
	}
</style>
