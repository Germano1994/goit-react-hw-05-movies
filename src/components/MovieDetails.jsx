import React, { useEffect, useState } from 'react';
import { Routes, useParams, Link, Route } from 'react-router-dom';
import { fetchTrendingMoviesDetails } from './api';
import Cast from './Cast';
import Reviews from './Reviews';
import styles from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();

  const [trendingMovies, setTrendingMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async (movieId) => {
      try {
        const movies = await fetchTrendingMoviesDetails(movieId);
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies(movieId);
  }, [movieId]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div>
    <div className={styles.movieDetails}>
      <img src={`https://image.tmdb.org/t/p/w500${trendingMovies.poster_path}`} alt="" />
      <h2>{trendingMovies.title}</h2>
      <p>{trendingMovies.overview}</p>
    </div>
    <div>
      <Link to="cast">
        Cast
    </Link>
    <Link to="reviews">
        Reviews
    </Link>
    </div>
    <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Routes>
            
          
    </div>
  );
}

export default MovieDetails;

