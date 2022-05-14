import React from 'react'
import PropTypes from 'prop-types'

function MovieCard({ title, originalTitle, author, date, description, picture }) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <img src={picture} alt="marvel" />
            <p><span>Titre original: </span>{originalTitle}</p>
            <p><span>Auteur : </span>{author}</p>
            <p><span>Date: </span>{date}</p>
            <p className='scroller'>{description}</p>
            <button>Ajouter favoris</button> 
        </div>
    )
}
 
MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    originalTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

export default MovieCard