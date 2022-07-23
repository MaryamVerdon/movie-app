import axios from "axios";
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import MovieCard from '../../components/MovieCard';

function Favorite(){
    const [listData, setListData] = useState([])

    useEffect(() => {
        let moviesId = window.localStorage.movies
        ? window.localStorage.movies.split(",")
        : [];

        for (let i = 0; i < moviesId.length; i++) {
            axios
            .get(
                `https://ghibliapi.herokuapp.com/films/${moviesId[i]}`
            )
            .then((res) => setListData((listData) => [...listData, res.data]));
        }
    }, []);

       

    return (
        <div className='myFavorites'>
            <h1>Mes films favoris</h1>
            <div className='container'>
            {
                
                listData.map((item) =>
                <MovieCard 
                    key={item.id}
                    movie={item}
                />
                
            )}
        </div>
        <Footer />
      </div>
    );
}
 
export default Favorite