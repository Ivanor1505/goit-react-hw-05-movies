import { fetchMovies } from 'components/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieSearch, SearchButton } from './Movies.styled';
import MoviesList from 'components/MoviesList/MovieList';

export default function SearchMovies() {
  const [params, setParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  // const [searchData, setSearchData] = useState('');

  // console.log('location', location);

  useEffect(() => {
    async function findMovie() {
      try {
        const dataMovie = await fetchMovies(
          '/search/movie',
          params.get('query')
        );
        setSearchMovies(dataMovie.results);
      } catch (error) {
        console.log(error);
      }
    }

    findMovie();
  }, [params]);

  const handleInputChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchInput(searchInput);
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
      <MoviesList movies={searchMovies} />
    </div>
  );
}
