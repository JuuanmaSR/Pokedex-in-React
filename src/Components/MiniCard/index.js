import React from "react";
import { Link } from "wouter";
import pokebola from '../../pokebola.png'
import lupa from '../../buscar.png'
import './index.css'
const MiniCard = ({ name }) => {

    return <>
        <div className="mini-card-container">
            <img className="img-pokebola" src={pokebola} alt='pokebola'></img>
            <Link to={`/search/${name}`}>
                <img className="img-lupa" src={lupa} alt="lupa"></img>
            </Link>
            <div className="mini-card-content">
                <p>{name}</p>
            </div>
        </div>

    </>
}

export default MiniCard