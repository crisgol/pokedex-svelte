import { apis } from '../apis/pokemon'

const getAll = async () => {
    const resp = await apis.getAll()
    const json = await resp.json()
    return json.results
}

const getById = async id => {
    const resp = await apis.getById(id)
    if (resp.ok) {
        const json = await resp.json()
        return json
    }
    throw new Error(`Não existe um pokemon com o id: ${id}`)
}

const services = {
    getAll,
    getById
}

export { services }
