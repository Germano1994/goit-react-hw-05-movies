import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from './api';
import styles from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();

  const [data, setTrendingMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async (movieId) => {
      try {
        const movies = await fetchMovieCast(movieId);
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
    <div className={styles.cast}>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {data.cast.map((actor) => (
          <li key={actor.id} className={styles.castItem}>
            {actor.profile_path ? (
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" />
            ) : (
              <p>Sorry, image not available</p>
            )}
            <p className={styles.actorName}>{actor.name}</p>
            <p className={styles.character}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
