import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieCredits } from './api';

function Cast() {
  const { movieId } = useParams();
  const { data, isLoading, isError, error } = useQuery(['movieCredits', movieId], () =>
    fetchMovieCredits(movieId)
  );

  useEffect(() => {
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Акторський склад</h2>
      <ul>
        {data.cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
