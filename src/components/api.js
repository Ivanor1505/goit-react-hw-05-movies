import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const ApiKey = 'api_key=1c49a2dee57820c4a97e02e984b4011e';

export const fetchMovies = async (params) => {
  const resp = await axios.get(`${params}?${ApiKey}`);
  const data = resp.data;
    console.log(data);
    return data;
};


