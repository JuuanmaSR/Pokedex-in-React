import React from "react"
import { Link } from "wouter"
import pokedexImg from '../../Pokedex-titulo.png'
import './index.css'

const Header = () => {
    return (
        <header className="pokedex-header">
            <Link to="/">
            <img className="pokedex-logo" src={pokedexImg} alt='pokedex-logo' />
            </Link>
        </header>
    )
}

export default Header