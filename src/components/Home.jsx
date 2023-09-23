import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from './api';
import styles from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchMovies();
  }, []);

  

  return (
    <div className={styles.home}>
      <h2>Найпопулярніші фільми на сьогодні</h2>
      <Link to={`/movies`}>Movies</Link>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <ul className={styles.movieList}>
          {trendingMovies.map((movie) => (
            <li key={movie.id} className={styles.movieItem}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
