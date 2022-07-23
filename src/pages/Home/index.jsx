import axios from "axios";
import React from 'react'
import MovieCard from '../../components/MovieCard'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'




function Home(){
    
  const [listData, setListData] = useState([])
    //barre de recherche
    const [search, setSearch] = useState("")
  
    //Connexion à l'API
    useEffect(() => {
      axios
            .get(
                `https://ghibliapi.herokuapp.com/films/`
            )
            .then((res) => setListData(res.data));
      }, []);
  
    return (
        <div className='homePage'>
            <Banner />
            <div className="inputContainer">
              <input  type="text" 
              placeholder="Entrez le titre d'un film" 
              onChange={(e) => setSearch(e.target.value)}
              className='searchInput'
              />
            </div>  
            <div className='container'>
              {
               listData
                .sort((a, b) => a.title.localeCompare(b.title, {ignorePunctuation: true}))
                .filter(movie => {
                  if (search === '') {
                    return movie;
                  } else if (movie.title.toLowerCase().includes(search.toLowerCase())) {
                    return movie;
                  }
                })
                .map((movie) => (
                 <MovieCard 
                   key={movie.id}
                   movie={movie}
                />
            ))}
            </div>
            <Footer />
      </div>
    );
  
}

export default Home
//mettre btn add ds card homePage
//mettre btn supp dans favoris !!!
//regler pb double affichage