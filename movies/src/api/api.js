import axios from "axios";


export const getMovies = async (title) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=&s=${title}&plot=full&page=1`
  );
  return response.data;
};

export const getData = async () => {
  const response = await axios.get(`http://localhost:4210/data`);
  return response.data;
};
