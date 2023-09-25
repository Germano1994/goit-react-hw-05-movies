import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from './api';
import styles from './Movies.module.css';

function Movies() {
  const [data, setTrendingMovies] = useState([]);
  const [searched, setSearched] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  const searchMovies = async (search) => {
    try {
      const movies = await fetchSearchMovies(search);
      setTrendingMovies(movies.results);
      setSearched(true); 
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    searchMovies(queryParams.get("q") || '');
    setSearch(queryParams.get("q") || '');
  }, [location.search]);

  const handleSearch = (event) => {
    event.preventDefault();
    searchMovies(event.target[0].value);
    const newSearch = `?q=${event.target[0].value}`;
    navigate({ search: newSearch });
  };

  return (
    <div className={styles.moviesContainer}>
      <h2>Movie search</h2>
      <Link to={`/`}>Home</Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          placeholder="Search movies"
          onChange={(e) => setSearch(e.target.value)}
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
