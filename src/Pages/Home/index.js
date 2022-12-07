import React from "react";
import SearchForm from "Components/SearchForm";
import { Helmet } from 'react-helmet'
import usePokemons from "Hooks/usePokemons";
import ListOfPokemons from "Components/ListOfPokemons";
import Spinner from "Components/Spinner";

const Home = () => {
    const { pokemons, isLoading } = usePokemons()
    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <Spinner/>
            </>
        )
    }
    return <>
        <Helmet>
            <title>Pokedex | Home</title>
        </Helmet>
        <SearchForm />
        <ListOfPokemons
            pokemons={pokemons}
        />


    </>
}

export default Home