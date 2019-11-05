<script>
    import { Link } from 'svelte-routing'
</script>

<style>
    .home {
        align-items: center;
        background: #ff3300;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        width: 100vw;
    }

    .home__brand {
        margin-bottom: 3rem;
    }

    :global(.home__link) {
        color: #fdfdfd !important;
        background: #cc2900;
        border-radius: 5px;
        padding: .75rem 5rem;
        transition: background .2s linear;
    }
    :global(.home__link:hover) {
        background: #b32400;
        text-decoration: none;
    }
</style>

<main class="home">
    <img alt="Pokedex" class="home__brand" src="/assets/img/brand.png">
    <div class="home__links">
        <Link getProps={() => ({ class: 'home__link' })} to="/list">Entrar</Link>
    </div>
</main>
