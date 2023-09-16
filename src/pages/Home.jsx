import { useEffect, useState } from 'react';
import { fetchMovies } from '../components/api';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const trendingData = await fetchMovies('/trending/movie/day');
        setTrendingMovies(trendingData.results);
        // console.log('ftrendingData', trendingData)
      } catch (error) {
        console.log('Помилка при завантаженні даних:', error);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}> {item.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
