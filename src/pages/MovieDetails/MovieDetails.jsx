import { fetchMoviesById } from 'components/api';
import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import {
  BackLink,
  InfoLink,
  MovieContainer,
  MovieGenres,
  MovieImage,
  MovieInfoContainer,
  MovieOverview,
  MovieScore,
  MovieTitle,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const params = useParams();
  const [quiz, setQuiz] = useState(null);
  const location = useLocation();
  const locationGoBack = location.state?.from ?? '/';
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const fetchedQuiz = await fetchMoviesById(params.movieId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        console.log(error);
        setError('Помилка при завантаженні даних.');
      }
    }
    fetchQuiz();
  }, [params.movieId]);

  // const imgURl =

  return (
    <MovieContainer>
      <BackLink to={locationGoBack}>← Go back</BackLink>
      {quiz && (
        <>
          <MovieImage
            src={
              quiz.poster_path !== null
                ? `https://image.tmdb.org/t/p/w300${quiz.poster_path}`
                : 'https://info.renome.ua/wp-content/uploads/2021/09/placeholder.png'
            }
            alt={quiz.original_title}
          ></MovieImage>
          <MovieInfoContainer>
            <MovieTitle>{quiz.original_title}</MovieTitle>
            <MovieScore>{`UserScore: ${quiz.vote_average}`}</MovieScore>
            <MovieOverview>Overview: {quiz.overview}</MovieOverview>
            <MovieGenres>
              Genres: {quiz.genres.map(genre => genre.name).join(', ')}?🤣
            </MovieGenres>
            <InfoLink to="cast">Cast</InfoLink>
            <InfoLink to="reviews">Review</InfoLink>
            {error && <p className="error">{error}</p>}
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </MovieInfoContainer>
        </>
      )}
    </MovieContainer>
  );
}
