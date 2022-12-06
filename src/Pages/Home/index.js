import React from "react";
import SearchForm from "Components/SearchForm";
import { Helmet } from 'react-helmet'
import usePokemons from "Hooks/usePokemons";
import ListOfPokemons from "Components/ListOfPokemons";

const Home = () => {
    const { pokemons} = usePokemons()
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