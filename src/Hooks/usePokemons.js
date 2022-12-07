import { useEffect, useContext, useState } from "react"
import getPokemons from "Services/getPokemons"
import useLocalStorage from "./useLocalStorage"
import Context from "context/PokemonsContext"


const usePokemons = () => {
    const { pokemons, setPokemons } = useContext(Context)
    const [nextPage, setNextPage] = useState('')
    const [previousPage, setPreviousPage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    // const [indice, setIndice] = useState(0)
    // const [listValue, setListValue] = useLocalStorage({ itemName: `pokemons_${indice}`, initialValue: [] })

    useEffect(() => {
        setIsLoading(true)
        getPokemons({})
            .then(({ pokemons, next, previous }) => {
                setPokemons(pokemons)
                setNextPage(next)
                setPreviousPage(previous)
                setIsLoading(false)
                // setIndice(indice + 1)
                // setListValue(pokemons)
            })
            .catch(error => {
                setIsLoading(false)
            })


    }, [setPokemons])

    const getNextPage = (() => {
        setIsLoading(true)
        getPokemons({ url: nextPage })
            .then(({ pokemons, next, previous }) => {
                setPokemons(pokemons)
                setNextPage(next)
                setPreviousPage(previous)
                setIsLoading(false)
                // setIndice(indice + 1)
                // setListValue(pokemons)
            })
            .catch(error => {
                setIsLoading(false)
            })

    })

    const getPreviousPage = (() => {
        setIsLoading(true)
        getPokemons({ url: previousPage })
            .then(({ pokemons, next, previous }) => {
                setPokemons(pokemons)
                setNextPage(next)
                setPreviousPage(previous)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    })
    return { pokemons, getNextPage, getPreviousPage, isLoading }
}

export default usePokemons
