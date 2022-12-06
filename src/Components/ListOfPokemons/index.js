import React from "react";
import usePokemons from "Hooks/usePokemons";
import MiniCard from "Components/MiniCard";
import './index.css'

const ListOfPokemons = ({ pokemons }) => {
    const { getNextPage, getPreviousPage } = usePokemons()

    return <>
        <div className="list-of-pokemons">
            {pokemons.map(({ name }) => {
                return <MiniCard
                    name={name}
                    key={name}
                />
            })}

        </div>
        <div className="button-list">
            <button  onClick={getPreviousPage}>Anterior</button>
            <button  onClick={getNextPage}>Siguiente</button>
        </div>
    </>
}

export default ListOfPokemons