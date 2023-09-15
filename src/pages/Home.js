import { useEffect, useState } from 'react';
import { fetchMovies } from '../components/api';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchMovies('/trending/movie/day')
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.error('Помилка при завантаженні даних:', error);
      });
  }, []);

  return (
    <div>
      <p>Trending today</p>
      <ul>
        {trendingMovies.map(item => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
    </div>
  );
}
