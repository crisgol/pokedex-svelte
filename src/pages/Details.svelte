<script>
    import App from '../containers/App.svelte'

    import Loading from '../components/Loading.svelte'
    import Pokemon from '../components/Pokemon.svelte'

    import { services } from '../services/pokemon'

    export let id = ''
</script>

<App>
    {#await services.getById(id)}
        <Loading />
    {:then item}
        <Pokemon pokemon={item} />
    {:catch error}
        <Error>{error.message}</Error>
    {/await}
</App>