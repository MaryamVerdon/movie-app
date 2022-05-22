import React from 'react'
import MovieCard from '../../components/MovieCard'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import logo from '../../assets/ghibli_logo.png'



function Home(){
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    //barre de recherche
    const [search, setSearch] = useState("")
  
    //Connexion à l'API
    useEffect(() => {
      setLoading(true);
      fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(data)) {
      return <p>There was an error loading your data!</p>;
    }
  
    return (
        <div className='homePage'>
            <Banner />
            <div className="InputContainer">
              <input  type="text" 
              placeholder="Entrez le titre d'un film" 
              onChange={(e) => setSearch(e.target.value)}
              className='searchInput'
              />
            </div>  
            <div className='container'>
              {
                data.filter(item => {
                  if (search === '') {
                    return item;
                  } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                    return item;
                  }
                }).map((item) => (
                 <MovieCard 
                   key={item.id}
                   title={item.title}
                   picture={item.image}
                   originalTitle={item.original_title}
                   author={item.director}
                   date={item.release_date}
                   description={item.description}
                />
            ))}
            </div>
      </div>
    );
  
}

export default Home