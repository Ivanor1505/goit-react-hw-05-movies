import SearchMovies from 'pages/Movies';
import HomePage from 'pages/Home';
import { Layout } from './Layout/Layout';
import MovieDetails from 'pages/MovieDetails';
// import { fetchMovies } from "./api";
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};
