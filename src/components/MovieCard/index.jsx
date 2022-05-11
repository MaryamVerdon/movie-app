import React from 'react'
import PropTypes from 'prop-types'

function MovieCard({ title, originalTitle, author, date, description, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <img src={picture} alt="marvel" height={80} width={80} />
            <span>{title}</span>
            <span>{originalTitle}</span>
            <span>{author}</span>
            <span>{date}</span>
            <span>{description}</span>
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