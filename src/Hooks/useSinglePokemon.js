import getSinglePokemon from "Services/getSinglePokemon"
import { useEffect, useState } from "react"

const useSinglePokemon = ({ keyword }) => {
    const [singlePokemon, setSinglePokemon] = useState()
    const [isLoading, setIsLoading] = useState(false)
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
                })
        }
    }, [singlePokemon, keyword])
    return { singlePokemon, isLoading }
}
export default useSinglePokemon