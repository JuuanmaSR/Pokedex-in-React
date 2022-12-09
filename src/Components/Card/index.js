import React from "react";
import pokebola from '../../pokebola.png'
import './index.css'


const Card = ({ pokemon }) => {
    const { name, type, imageUrl, base_experience, weight, height } = pokemon
    return <>
        <div className={`Card-container ${type}`}>
            <div className="img-container">
                <img className="img-pokemon" src={imageUrl} alt="pokemon-img" />
            </div>
            <div className="info-pokemon">
                <div className="header-info">
                    <img className="pokebola-img" src={pokebola} alt='pokebola' />
                    <h1 className="name-pokemon">
                        {name || 'undefined'}
                    </h1>
                </div>
                <div className="info-container">
                    <div className="info-content">
                        <strong className="info-label">EXP</strong>
                        <p className="info-value">{base_experience || 'undefined'}</p>
                    </div>
                    <div className="info-content">
                        <strong className="info-label">TYPE</strong>
                        <p className={`info-type-value ${type}`}>{type || 'undefined'}</p>
                    </div>
                    <div className="info-content">
                        <strong className="info-label">WEIGHT</strong>
                        <p className="info-value">{weight}</p>
                    </div>
                    <div className="info-content">
                        <strong className="info-label">HEIGHT</strong>
                        <p className="info-value">{height}</p>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default React.memo(Card)