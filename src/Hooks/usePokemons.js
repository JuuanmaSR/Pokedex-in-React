import { useEffect, useContext, useState } from "react"
import getPokemons from "Services/getPokemons"
import useLocalStorage from "./useLocalStorage"
import Context from "context/PokemonsContext"


const usePokemons = () => {
    const { pokemons, setPokemons } = useContext(Context)
    const [nextPage, setNextPage] = useState('')
    const [previousPage, setPreviousPage] = useState('')
    // const [indice, setIndice] = useState(0)
    // const [listValue, setListValue] = useLocalStorage({ itemName: `pokemons_${indice}`, initialValue: [] })

    useEffect(() => {
        getPokemons({})
            .then(({ pokemons, next, previous }) => {
                setPokemons(pokemons)
                setNextPage(next)
                setPreviousPage(previous)
                // setIndice(indice + 1)
                // setListValue(pokemons)
            })


    }, [setPokemons])

    const getNextPage = (() => {
        getPokemons({ url: nextPage })
            .then(({ pokemons, next, previous }) => {
                setPokemons(pokemons)
                setNextPage(next)
                setPreviousPage(previous)
                // setIndice(indice + 1)
                // setListValue(pokemons)
            })

    })

    const getPreviousPage = (() => {
        getPokemons({ url: previousPage })
            .then(({ pokemons, next, previous }) => {
                setPokemons(pokemons)
                setNextPage(next)
                setPreviousPage(previous)
            })
    })
    return { pokemons, getNextPage, getPreviousPage }
}

export default usePokemons
