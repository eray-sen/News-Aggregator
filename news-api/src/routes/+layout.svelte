<nav class="navbar">
	<div class="navbar-container">
		<a href="/">
			<img
				src="https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"
				class="navbar-logo"
				alt="Logo"
			/>
		</a>

		<ul class="navbar-menu">
			<li class="navbar-item"><a href="/news" class="navbar-link">News</a></li>
			<li class="navbar-item"><a href="/sources" class="navbar-link">Sources</a></li>
		</ul>
	</div>
</nav>
<main>
	<slot></slot>
</main>

<footer class="footer">
	<p>&copy; 2024 Warsaw</p>
</footer>

<style>
	.navbar {
		background-color: #333;
		color: white;
		padding: 1rem;
	}

	.navbar-container {
		display: flex;
		align-items: center;
	}

	.navbar-logo {
		width: 100px;
		font-size: 1.5rem;
		font-weight: bold;
		color: white;
		text-decoration: none;
	}

	.navbar-menu {
		list-style: none;
		display: flex;
		margin-left: 35%;
	}

	.navbar-item {
		margin-left: 1rem;
	}

	.navbar-link {
		color: white;
		text-decoration: none;
		font-size: 1.5rem;
	}

	.navbar-link:hover {
		color: #ddd;
	}
	.footer {
		background-color: #333;
		color: white;
		text-align: center;
		padding: 1rem;
		bottom: 0;
		width: 100%;
	}
</style>
