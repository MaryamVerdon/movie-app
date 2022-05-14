import React from 'react'
import DefaultPicture from '../../assets/marvel.png'
import MovieCard from '../../components/MovieCard'

 
const movies = [
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: "atman est devenu un personnage très populaire rapidement après sa première apparition, ce qui s'est traduit par la création de son propre titre Batman, en 1940. Au cours des années, différentes interprétations du personnage ont été proposées. Par ailleurs, Batman a été adapté dans une grande variété de médias. À la télévision, il est dès les années 1940 le héros de deux serials, Batman et Batman et Robin, puis de la série Batman de 1966 à 1968, ainsi que d'un film réalisé par Leslie H. Martinson en 1966 et tiré de la même série télévisée. De multiples séries télévisées d'animation verront également le jour au fil du temps, dont Batman en 1992. Au cinéma deux séries de films lui ont été consacrées, la première dans les années 1990 a été réalisée par Tim Burton et Joel Schumacher, la seconde dans les années 2000 a été réalisée par Christopher Nolan, avant que Batman n'apparaisse dans les films de l'univers cinématographique DC à partir de 2016. Plusieurs jeux vidéo ont utilisé le personnage avec un succès relatif jusqu'à la dernière série de jeux inaugurée en 2009 par Arkham Asylum qui a été saluée par la critique et le public.",
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: "atman est devenu un personnage très populaire rapidement après sa première apparition, ce qui s'est traduit par la création de son propre titre Batman, en 1940. Au cours des années, différentes interprétations du personnage ont été proposées. Par ailleurs, Batman a été adapté dans une grande variété de médias. À la télévision, il est dès les années 1940 le héros de deux serials, Batman et Batman et Robin, puis de la série Batman de 1966 à 1968, ainsi que d'un film réalisé par Leslie H. Martinson en 1966 et tiré de la même série télévisée. De multiples séries télévisées d'animation verront également le jour au fil du temps, dont Batman en 1992. Au cinéma deux séries de films lui ont été consacrées, la première dans les années 1990 a été réalisée par Tim Burton et Joel Schumacher, la seconde dans les années 2000 a été réalisée par Christopher Nolan, avant que Batman n'apparaisse dans les films de l'univers cinématographique DC à partir de 2016. Plusieurs jeux vidéo ont utilisé le personnage avec un succès relatif jusqu'à la dernière série de jeux inaugurée en 2009 par Arkham Asylum qui a été saluée par la critique et le public.",
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: "atman est devenu un personnage très populaire rapidement après sa première apparition, ce qui s'est traduit par la création de son propre titre Batman, en 1940. Au cours des années, différentes interprétations du personnage ont été proposées. Par ailleurs, Batman a été adapté dans une grande variété de médias. À la télévision, il est dès les années 1940 le héros de deux serials, Batman et Batman et Robin, puis de la série Batman de 1966 à 1968, ainsi que d'un film réalisé par Leslie H. Martinson en 1966 et tiré de la même série télévisée. De multiples séries télévisées d'animation verront également le jour au fil du temps, dont Batman en 1992. Au cinéma deux séries de films lui ont été consacrées, la première dans les années 1990 a été réalisée par Tim Burton et Joel Schumacher, la seconde dans les années 2000 a été réalisée par Christopher Nolan, avant que Batman n'apparaisse dans les films de l'univers cinématographique DC à partir de 2016. Plusieurs jeux vidéo ont utilisé le personnage avec un succès relatif jusqu'à la dernière série de jeux inaugurée en 2009 par Arkham Asylum qui a été saluée par la critique et le public.",
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: "atman est devenu un personnage très populaire rapidement après sa première apparition, ce qui s'est traduit par la création de son propre titre Batman, en 1940. Au cours des années, différentes interprétations du personnage ont été proposées. Par ailleurs, Batman a été adapté dans une grande variété de médias. À la télévision, il est dès les années 1940 le héros de deux serials, Batman et Batman et Robin, puis de la série Batman de 1966 à 1968, ainsi que d'un film réalisé par Leslie H. Martinson en 1966 et tiré de la même série télévisée. De multiples séries télévisées d'animation verront également le jour au fil du temps, dont Batman en 1992. Au cinéma deux séries de films lui ont été consacrées, la première dans les années 1990 a été réalisée par Tim Burton et Joel Schumacher, la seconde dans les années 2000 a été réalisée par Christopher Nolan, avant que Batman n'apparaisse dans les films de l'univers cinématographique DC à partir de 2016. Plusieurs jeux vidéo ont utilisé le personnage avec un succès relatif jusqu'à la dernière série de jeux inaugurée en 2009 par Arkham Asylum qui a été saluée par la critique et le public.",
        picture: DefaultPicture,
    },
    {
        title: 'un titre',
        originalTitle: 'un titre en vo',
        author: 'David G',
        date: '1999',
        description: "atman est devenu un personnage très populaire rapidement après sa première apparition, ce qui s'est traduit par la création de son propre titre Batman, en 1940. Au cours des années, différentes interprétations du personnage ont été proposées. Par ailleurs, Batman a été adapté dans une grande variété de médias. À la télévision, il est dès les années 1940 le héros de deux serials, Batman et Batman et Robin, puis de la série Batman de 1966 à 1968, ainsi que d'un film réalisé par Leslie H. Martinson en 1966 et tiré de la même série télévisée. De multiples séries télévisées d'animation verront également le jour au fil du temps, dont Batman en 1992. Au cinéma deux séries de films lui ont été consacrées, la première dans les années 1990 a été réalisée par Tim Burton et Joel Schumacher, la seconde dans les années 2000 a été réalisée par Christopher Nolan, avant que Batman n'apparaisse dans les films de l'univers cinématographique DC à partir de 2016. Plusieurs jeux vidéo ont utilisé le personnage avec un succès relatif jusqu'à la dernière série de jeux inaugurée en 2009 par Arkham Asylum qui a été saluée par la critique et le public.",
        picture: DefaultPicture,
    },
]

function Home(){
    return (
        <div>
            <h2>Page d'accueil</h2>
            <div className='container'>
                
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
        </div>
        
    )
}

export default Home