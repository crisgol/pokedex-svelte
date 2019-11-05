<script>
	import { Link } from 'svelte-routing'
</script>

<style>
	:global(body) {
		background: #f2f2f2;
	}

	.header {
		align-items: center;
		background: #ff3300;
		display: flex;
		padding: 0.25rem 2rem;
	}

	.header__brand {
		height: 35px;
		margin-right: 1rem;
	}

	.menu__list {
		display: flex;
	}

	.menu__item {
		list-style: none;
	}

	:global(.menu__link) {
		color: #fdfdfd !important;
		display: block;
		padding: 0.5rem 1rem;
	}

	.app {
		padding: 2rem;
	}
</style>

<header class="header">
	<img alt="Pokedex" class="header__brand" src="/assets/img/brand.png">
	<nav class="menu">
		<ul class="menu__list">
			<li class="menu__item">
				<Link getProps={() => ({ class: 'menu__link' })} to="/">Inicio</Link>
			</li>
			<li class="menu__item">
				<Link getProps={() => ({ class: 'menu__link' })} to="/list">Lista</Link>
			</li>
		</ul>
	</nav>
</header>
<main class="app">
	<slot />
</main>
