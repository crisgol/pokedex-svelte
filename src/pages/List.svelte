<script>
    import { Link } from 'svelte-routing'
    import sortBy from 'sort-by'

    import App from '../containers/App.svelte'

    import Error from '../components/Error.svelte'
    import Loading from '../components/Loading.svelte'
    import Pokemon from '../components/Pokemon.svelte'

    import { services } from '../services/pokemon'

    let filter = ''

    const getId = url => {
        const split = url.split('/').filter(Boolean)
        return split[split.length - 1]
    }
</script>

<style>
    .list__item {
        list-style: none;
    }

    :global(.list__link) {
        background: #fdfdfd;
        border-radius: 5px;
        box-shadow: 3px 2px 5px rgba(0, 0, 0, .1);
        color: #333 !important;
        display: block;
        list-style: none;
        margin-bottom: 1rem;
        padding: 1rem;
        transition: background .1s linear;
    }

    :global(.list__item:last-child > .list__link) {
        margin-bottom: 0;
    }

    :global(.list__link:hover) {
        background: #f2f2f2;
        text-decoration: none;
    }

    .filter {
        background: #fdfdfd;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        color: #333333;
        font-size: 1.1rem;
        margin-bottom: 2rem;
        padding: 1rem;
        width: 100%;
    }

    .filter:focus {
        border-color: #0099ff;
        box-shadow: 0 0 5px rgba(0, 153, 255, 0.5);
        outline: none;
    }
</style>

<App>
    {#await services.getAll()}
        <Loading />
    {:then list}
        <input class="filter" bind:value={filter} placeholder="Digite o nome do pokemon" />
        <ul class="list">
            {#each list.filter(i => i.name.startsWith(filter)).sort(sortBy('name')) as item}
                <li class="list__item">
                    <Link getProps={() => ({ class: 'list__link' })} to={`/details/${getId(item.url)}`}>
                        {item.name
                    }</Link>
                </li>
            {/each}
        </ul>
    {:catch error}
        <Error>{error.message}</Error>
    {/await}
</App>
