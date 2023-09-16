import axios from 'axios';

const API_KEY = "1c49a2dee57820c4a97e02e984b4011e";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {api_key: API_KEY}


export const fetchMovies = async (opt, query) => {
  const resp = await axios.get(`${opt}?&query=${query}`);
  const data = resp.data;
    // console.log(query);
    return data;
};

export const fetchMoviesById = async (movieId) => {
  const resp = await axios.get(`/movie/${movieId}?`);
  const data = resp.data;
    // console.log(query);
    return data;
};

export const fetchActorsById = async (movieId) => {
  const resp = await axios.get(`/movie/${movieId}/credits?`);
  const data = resp.data;
    // console.log(query);
    return data;
};

