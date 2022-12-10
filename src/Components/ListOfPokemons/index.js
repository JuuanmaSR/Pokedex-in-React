import React from "react";
import MiniCard from "Components/MiniCard";
import './index.css'

const ListOfPokemons = ({ pokemons, getNextPage, getPreviousPage }) => {

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
            <button  onClick={getPreviousPage}>Previous</button>
            <button  onClick={getNextPage}>Next</button>
        </div>
    </>
}

export default ListOfPokemons