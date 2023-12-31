import { fetchActorsById } from '../api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastItem, CastImg } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    async function getCastData() {
      try {
        const data = await fetchActorsById(movieId);
        if (data.cast.length === 0) {
          setNoResults(true);
        } else {
          setCast(data.cast);
        }
      } catch (error) {
        console.log(error);
        setError('Помилка при завантаженні даних.');
      }
    }
    getCastData();
  }, [movieId]);

  return (
    <div>
      {noResults ? (
        <p>No results found.</p>
      ) : (
        <CastList>
          {cast.map(({ name, profile_path, id }) => (
            <CastItem key={id}>
              <h3>{name}</h3>
              <CastImg
                src={
                  profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://info.renome.ua/wp-content/uploads/2021/09/placeholder.png'
                }
                alt={name}
              />
            </CastItem>
          ))}
        </CastList>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Cast;
