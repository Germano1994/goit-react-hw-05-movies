import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieReviews } from './api';

function Reviews() {
  const { movieId } = useParams();
  const { data, isLoading, isError, error } = useQuery(['movieReviews', movieId], () =>
    fetchMovieReviews(movieId)
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
      <h2>Огляди</h2>
      <ul>
        {data.results.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
