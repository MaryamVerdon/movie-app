import React , { useState }from 'react'
import PropTypes from 'prop-types'
import '../../utils/styles/moviecard.css'


function MovieCard({ movie}) {
   const [favBtn, setFavBtn] = useState(true)
   const handleAdd = () => {
    setFavBtn(true)
    }
    const handleDel = () => {
      setFavBtn(false)
    }
    const addStorage = () => {
        let storedData = window.localStorage.movies
          ? window.localStorage.movies.split(",")
          : [];
    
        if (!storedData.includes(movie.id.toString())) {
          storedData.push(movie.id);
          window.localStorage.movies = storedData;
        }

      };

      const deleteStorage = () => {
        let storedData = window.localStorage.movies.split(",");
    
        let newData = storedData.filter((id) => id !== movie.id);
    
        window.localStorage.movies = newData;
      };

    return (
        <div className="card">
            <h1>{movie.title}</h1>
            <img src={movie.image} alt="films" /> 
            <p><span>Titre original: </span>{movie.original_title}</p>
            <p><span>Auteur : </span>{movie.director}</p>
            <p><span>Date: </span>{movie.release_date}</p>
            <p className='scroller'>{movie.description}</p>
          {

         
          (favBtn ? (<button
                onClick={() => { addStorage();  handleDel();}}           
            >
                Ajouter favoris
            </button> ) : (
              <button
                onClick={() => {
                  deleteStorage();  
                  window.location.reload();
                  handleAdd();}}           
            >
               Supprimer favoris
            </button> 
            ))
            
          }
        </div>
    )
}
 
MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
   
}

export default MovieCard