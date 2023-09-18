import { fetchMovies } from 'components/api';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ListMovies, MovieSearch, SearchButton } from './Movies.styled';

export default function SearchMovies() {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState('');

  // console.log('location', location);

  useEffect(() => {
    async function findMovie() {
      try {
        const dataMovie = await fetchMovies('/search/movie', searchData);
        setSearchMovies(dataMovie.results);
      } catch (error) {
        console.log(error);
      }
    }

    findMovie();
  }, [searchData]);

  const handleInputChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchData(searchInput);
    params.set('query', searchInput);
    setParams(params);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MovieSearch
          type="text"
          value={searchInput}
          onChange={handleInputChange}
        ></MovieSearch>
        <SearchButton type="submit">Search</SearchButton>
      </form>
      <ListMovies>
        {searchMovies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.original_title}
            </Link>
          </li>
        ))}
      </ListMovies>
    </div>
  );
}
