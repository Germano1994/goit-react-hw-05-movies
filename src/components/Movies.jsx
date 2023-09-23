import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchMovies } from './api';

function Movies() {
  const [search, setSearch] = useState('');
  const [data, setTrendingMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const searchMovies = async (search) => {
      try {
        const movies = await fetchSearchMovies(search);
        setTrendingMovies(movies.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    searchMovies(search);
  }, [search]);


  const handleSearch = (event) => {
    event.preventDefault();
  
  
  }


  return (
    <div>
      <h2>Пошук фільмів</h2>
      <Link to={`/`}>Home</Link>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Введіть назву фільму"
        />
        <button type="submit">Пошук</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
