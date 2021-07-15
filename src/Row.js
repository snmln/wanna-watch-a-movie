import React, { useEffect, useState } from 'react';
import axios from './axios.js';
import './Row.css';

const base_url = "http://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //if [] run once when row loads and odnt run it again  
        // if [movies] it will run every time there is a movie
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/*posters*/}
                {movies.map(movie=>(
                    <img
                    key={movie.id} 
                    className={`row__poster ${isLargeRow && "row_posterLarge" }`}
                    src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                    alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row