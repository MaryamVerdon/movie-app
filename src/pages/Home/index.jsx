import React from 'react'
import MovieCard from '../../components/MovieCard'
import { useEffect, useState } from 'react'




function Home(){
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
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
      <div className='container'>
        {data.map((item) => (
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
    );
  
}

export default Home