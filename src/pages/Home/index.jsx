import React from 'react'
import Header from '../../components/Header'
import DefaultPicture from '../../assets/marvel.png'
import MovieCard from '../../components/MovieCard'

 
const movies = [
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        picture: DefaultPicture,
    },
]

function Home(){
    return (
        <div>
            <h1>Page d'accueil</h1>
    
           {movies.map((movie, index) => (
            <MovieCard
                key={`${movie.title}-${index}`}
                title={movie.title}
                originalTitle={movie.originalTitle}
                author={movie.author}
                date={movie.date}
                description={movie.description}
                picture={movie.picture}
            />
        ))}
            
        </div>
        
    )
}

export default Home