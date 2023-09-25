import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchMovies } from './api';
import styles from './Movies.module.css';

function Movies() {
  const [search, setSearch] = useState('');
  const [data, setTrendingMovies] = useState([]);
  const [searched, setSearched] = useState(false);

  const searchMovies = async () => {
    try {
      const movies = await fetchSearchMovies(search);
      setTrendingMovies(movies.results);
      setSearched(true); // Позначаємо, що був виконаний пошук
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div className={styles.moviesContainer}>
      <h2>Movie search</h2>
      <Link to={`/`}>Home</Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {searched && (
        <ul>
          {data.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
