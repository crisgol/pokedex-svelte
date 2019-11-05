<script>
    import { Router, Route } from 'svelte-routing'

    import Home from '../pages/Home.svelte'
    import List from '../pages/List.svelte'
    import Details from '../pages/Details.svelte'
    import NotFound from '../pages/NotFound.svelte'
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/list" component={List} />
    <Route path="/details/:id" component={Details} />
    <Route path="*" component={NotFound} />
</Router>
