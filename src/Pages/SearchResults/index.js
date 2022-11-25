import Card from "Components/Card"
import useSinglePokemon from "Hooks/useSinglePokemon"
import { Helmet } from "react-helmet"

const SearchResult = ({ params }) => {
    const { keyword } = params
    const {singlePokemon: pokemon} = useSinglePokemon({ keyword })
    if (!pokemon) {
        return null
    }
    return (
        <>
            <Helmet>
                <title>Pokemon | {pokemon.name}</title>
            </Helmet>
            <Card pokemon={pokemon} />
        </>
    )
}

export default SearchResult