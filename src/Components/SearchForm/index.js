import React, { useState } from "react";
import { useLocation } from 'wouter'
import './index.css'

const SearchForm = () => {
    const [_, navigate] = useLocation()
    const [name, setName] = useState('')
    
    const onSubmit = ({ keyword }) => {
        if (keyword !== '') {
            navigate(`search/${keyword}`)
        }
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        onSubmit({keyword: name})
    }
    const handleChange = evt => {
        const keyword = (evt.target.value).toLowerCase()
        setName(keyword)
    }

    return (
        <form onSubmit={handleSubmit} className="search-pokemon-form">
            <input placeholder="Pokemon name..." value={name} onChange={handleChange} />
        </form>
    )
}

export default SearchForm