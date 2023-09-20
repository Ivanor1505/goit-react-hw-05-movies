import React from 'react';
import { ListMovies } from './MovieList.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  // console.log('location', location);
  return (
    <ListMovies>
      {movies.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.original_title}
          </Link>
        </li>
      ))}
    </ListMovies>
  );
};

export default MoviesList;
