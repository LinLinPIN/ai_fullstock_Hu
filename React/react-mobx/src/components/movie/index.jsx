import React, { useEffect } from 'react';
import movie from '../../store/movieStore';
import { observer } from 'mobx-react-lite'

const MovieList = () => {
    useEffect(() => {
        movie.setMovieList()
    }, [])
    return (
        <div>
            <ul>
                {
                    movie.movieList.map(item => (
                        <li key={item.id}>{item.nm} -- {item.star}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default observer(MovieList);