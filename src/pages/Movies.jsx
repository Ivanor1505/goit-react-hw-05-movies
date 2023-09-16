import { fetchMovies } from 'components/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SearchMovies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState('');

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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {searchMovies.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
        </li>
      ))}
    </div>
  );
}
