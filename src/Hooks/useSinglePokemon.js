import getSinglePokemon from "Services/getSinglePokemon"
import { useEffect, useState } from "react"

const useSinglePokemon = ({ keyword }) => {
    const [singlePokemon, setSinglePokemon] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        
        if (!singlePokemon) {
            setIsLoading(true)
            getSinglePokemon({ keyword })
                .then(pokemon => {
                    setSinglePokemon(pokemon)
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                    setError(true)
                })
        }
    }, [singlePokemon, keyword])
    return { singlePokemon, isLoading, error }
}
export default useSinglePokemon