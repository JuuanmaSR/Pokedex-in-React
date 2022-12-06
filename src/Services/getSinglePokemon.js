import { BASE_URL } from './settings'

const fromApiResponseToPokemon = apiResponse => {
    const { id, name, base_experience, types, sprites } = apiResponse
    const type = types[0].type.name
    const imageUrl = sprites.other.home.front_default
    return { id, name, base_experience, type ,imageUrl }
}

const getSinglePokemon = ({ keyword }) => {
    return fetch(`${BASE_URL}/pokemon/${keyword}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Response not OK')
            }
            return res.json()
        })
        .then(fromApiResponseToPokemon)
}

export default getSinglePokemon