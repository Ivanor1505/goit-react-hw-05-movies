import { fetchActorsById } from '../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastItem, CastImg } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCastData() {
      try {
        const data = await fetchActorsById(movieId);
        setCast(data.cast);
        // console.log('data', data);
      } catch (error) {
        console.log(error);
      }
    }
    getCastData();
  }, [movieId]);

  return (
    <CastList>
      {cast.map(({ name, profile_path, id }) => (
        <CastItem key={id}>
          <h3>{name}</h3>
          <CastImg
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
