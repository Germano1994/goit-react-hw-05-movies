import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrendingMoviesDetails } from './api';

function MovieDetails() {
  const { movieId } = useParams();

  const [trendingMovies, setTrendingMovies] = useState({});
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchMovies = async (movieId) => {
    try {
      const movies = await fetchTrendingMoviesDetails(movieId);
      console.log(movies)
      setTrendingMovies(movies);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  }
  
  fetchMovies(movieId);

  }, [movieId]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  
console.log(trendingMovies);

  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/w500"+trendingMovies.poster_path} alt="" />
      <h2>Деталі фільму</h2>
      <h3>{trendingMovies.title}</h3>
      <p>{trendingMovies.overview}</p>
      {}
    </div>
  );
}

export default MovieDetails;
