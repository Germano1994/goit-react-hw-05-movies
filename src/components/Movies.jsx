import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { searchMovies } from './api';

function Movies() {
  const [query, setQuery] = useState('');
  const { data, isLoading, isError, error } = useQuery(['searchMovies', query], () =>
    searchMovies(query)
  );

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Пошук фільмів</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введіть назву фільму"
        />
        <button type="submit">Пошук</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
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
