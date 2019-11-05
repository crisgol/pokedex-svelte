<script>
    export let pokemon = {}
    console.log(pokemon)
</script>

<style>
    .pokemon {
        margin-top: 3rem;
        text-align: center;
    }

    .pokemon__wrap {
        display: inline-block;
    }

    .pokemon__title {
        color: #333333;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .pokemon__content {
        display: flex;
    }

    .pokemon__picture {
        height: 100px;
        margin-right: 2rem;
    }

    .pokemon__stat {
        list-style: none;
        text-align: left;
    }

    .pokemon__stat___name {
        font-size: .8rem;
        text-transform: capitalize;
    }

    .pokemon__stat___base {
        background: #fdfdfd;
        display: block;
        height: 10px;
        margin-bottom: .5rem;
        width: 100%;
    }

    .pokemon__stat___base--bar {
        background: #00cc99;
        display: block;
        height: 10px;
        width: var(--base);
    }
</style>

<div class="pokemon">
    <div class="pokemon__wrap">
        <div class="header">
            <div class="pokemon__title">{pokemon.name}</div>
        </div>
        <div class="pokemon__content">
            <img alt={pokemon.name} class="pokemon__picture" src={pokemon.sprites.front_default}>
            <ul class="pokemon__stats">
                {#each pokemon.stats as stat}
                    <li class="pokemon__stat">
                        <span class="pokemon__stat___name">{stat.stat.name}</span>
                        <span class="pokemon__stat___base">
                            <span class="pokemon__stat___base--bar" style={`width: ${stat.base_stat}%;`} />
                        </span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
