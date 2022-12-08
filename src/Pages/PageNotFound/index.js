import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Pokebola from '../../pokebola.png'
import './index.css'

const PageNotFound = () => {
    return <div className="error-page-container">
        <Helmet>
            <title>Pokemon not found</title>
        </Helmet>
        <div className="error-page-content">
            <div className="error-page-logo">
                <p id="error-title">sorry</p>
                <p>4</p>
                <img className="pokebola-error-img" src={Pokebola} alt="Pokebola-img" />
                <p>4</p>
            </div>
            <div className="error-page-text">
                <p>Pokemon not found</p>
            </div>
            <Link className="error-button" to="/">Go to home</Link>
        </div>
    </div>


}

export default PageNotFound