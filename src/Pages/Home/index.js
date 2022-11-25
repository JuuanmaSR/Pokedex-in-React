import React from "react";
import SearchForm from "Components/SearchForm";
import { Helmet } from 'react-helmet'
import MiniCard from "Components/MiniCard";
const name = 'squirtle'
const Home = () => {
    return <>
        <Helmet>
            <title>Pokedex | Home</title>
        </Helmet>
        <SearchForm />
        <MiniCard name={name}/>
    </>
}

export default Home