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
      <div className={styles.container}>
        <div className={styles.moviesDetails}>
          <Link to="/" className={styles.backButton}>Back</Link> {}
          <img src={`https://image.tmdb.org/t/p/w400${trendingMovies.poster_path}`} alt="" />
          <div className={styles.details}>
            <h2>{trendingMovies.title}</h2>
            <p>Overview: {trendingMovies.overview}</p>
            <p>User Score: {trendingMovies.vote_average}</p>
            <p>Genres: {trendingMovies.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <div className={styles.additional}>
          <h3>Additional Information</h3>
          <Link to="cast" className={styles.link}>
            Cast
          </Link>
          <Link to="reviews" className={styles.link}>
            Reviews
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetails;
