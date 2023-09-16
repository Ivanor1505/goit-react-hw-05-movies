import { fetchMoviesById } from 'components/api';
import { useEffect, useState } from 'react';
import { NavLink, Link, useParams, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  const params = useParams();
  const [quiz, setQuiz] = useState(null);
  // console.log('first', quiz);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const fetchedQuiz = await fetchMoviesById(params.movieId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuiz();
  }, [params.movieId]);

  return (
    <div>
      <Link to="/movies">← Go back</Link>
      {quiz && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w300${quiz.poster_path}`}
            alt={quiz.original_title}
          ></img>
          <h2>{quiz.original_title}</h2>
          <p>User score</p>
          <p>{quiz.overview}</p>
          <p>Genres: {quiz.genres.map(genre => genre.name).join(', ')}</p>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Review</NavLink>
          <Outlet />
        </>
      )}
    </div>
  );
}
