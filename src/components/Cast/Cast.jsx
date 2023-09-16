import { fetchActorsById } from '../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCastData() {
      try {
        const data = await fetchActorsById(movieId);
        setCast(data.cast);
        console.log('data', data);
      } catch (error) {
        console.log(error);
      }
    }
    getCastData();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ name, profile_path, id }) => (
        <li key={id}>
          <h3>{name}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          />
        </li>
      ))}
    </ul>
  );
};

export default Cast;
