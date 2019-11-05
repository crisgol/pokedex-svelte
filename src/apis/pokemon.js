const POKE_API_ENDPOINT = 'https://pokeapi.co/api/v2'

const getAll = (offset = 0, limit = 1000) => fetch(`${POKE_API_ENDPOINT}/pokemon?offset=${offset}&limit=${limit}`)

const getById = id => fetch(`${POKE_API_ENDPOINT}/pokemon/${id}`)

const apis = {
    getAll,
    getById
}

export { apis }
