import Card from "Components/Card"
import Spinner from "Components/Spinner"
import useSinglePokemon from "Hooks/useSinglePokemon"
import { Helmet } from "react-helmet"

const SearchResult = ({ params }) => {
    const { keyword } = params
    const {singlePokemon: pokemon, isLoading} = useSinglePokemon({ keyword })
    if(isLoading){
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner/>
            </>
        )
    }
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