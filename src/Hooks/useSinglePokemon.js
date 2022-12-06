import getSinglePokemon from "Services/getSinglePokemon"
import { useEffect, useState } from "react"

const useSinglePokemon = ({ keyword }) => {
    const [singlePokemon, setSinglePokemon] = useState()
    useEffect(() => {
        if (!singlePokemon) {
            getSinglePokemon({ keyword })
                .then(pokemon => {
                    setSinglePokemon(pokemon)
                })
        }
    }, [singlePokemon, keyword])
    return { singlePokemon }
}
export default useSinglePokemon