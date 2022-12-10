import React, { useEffect, useState } from 'react';
import axios from '../Constants/Axios';
import { API_KEY,imageUrl  } from '../Constants/Constants';

function Banner() {
    const [movie, setMovie]=useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[0])
        })
    }, [])
    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
            <div className='content'>
                <h1 className='title'>{movie?movie.title:""}</h1>
                <div className='bannerbtns'>
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori.</p>
                <div className='fade'></div>
            </div>
        </div>
    )
}

export default Banner