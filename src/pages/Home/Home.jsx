import { useEffect, useState } from 'react';
import { fetchMovies } from '../../components/api';
import MoviesList from 'components/MoviesList/MovieList';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const trendingData = await fetchMovies('/trending/movie/day');
        setTrendingMovies(trendingData.results);
        // console.log('ftrendingData', trendingData)
      } catch (error) {
        console.log(error);
        setError('Помилка при завантаженні даних.');
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={trendingMovies} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
