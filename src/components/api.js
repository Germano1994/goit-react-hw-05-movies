import axios from 'axios';

const API_KEY = 'd674a3ff6872e455972c5f5b224f497e'; 

const BASE_URL = 'https://api.themoviedb.org/3';


export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/all/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTrendingMoviesDetails = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${id}?language=en-US`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const fetchMovieReviews = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?language=en-US&page=1`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const fetchMovieCast = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${id}/credits?language=en-US`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };



  export const fetchSearchMovies = async (search) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${search}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


