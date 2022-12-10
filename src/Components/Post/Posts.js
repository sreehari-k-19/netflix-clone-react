import React, { useEffect, useState } from 'react';
import axios from '../Constants/Axios';
import { API_KEY, imageUrl } from '../Constants/Constants';
import YouTube from 'react-youtube';

function Posts(props) {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {

            autoplay: 1,
        }
    };
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setMovies(response.data.results)
        })
    }, [])
    const [urlId, seturlId] = useState('')

    const handleMovie = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data)
            if (response.data.results.length !== 0) {
                console.log(response.data.results[0])
                seturlId(response.data.results[0])
            }

        })
    }
    return (
        <div className='row'>
            <h3>{props.title}</h3>
            <div className='posters'>
                {movies.map((movie) => (
                    <img className={props.isSmall ? 'smallposter' : 'poster'} onClick={() => { handleMovie(movie.id) }} alt='imag' src={`${imageUrl + movie.backdrop_path}`} />

                ))}
            </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default Posts