import { BASE_URL } from './settings'

const fromApiResponseToPokemons = apiResponse => {
    const { results = [], next, previous } = apiResponse
    if (Array.isArray(results)) {
        const pokemons = results.map((pokemon) => {
            const { name } = pokemon
            return { name }
        })
        return { pokemons, next, previous }
    }
    return []
}


const getPokemons = ({url}) => {
    let apiUrl = url ? url : `${BASE_URL}/pokemon`
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Response is NOT ok.')
            }
            return response.json()
        })
        .then(
            fromApiResponseToPokemons
        )
}
export default getPokemons