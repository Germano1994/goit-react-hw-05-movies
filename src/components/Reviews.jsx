import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from './api';
import styles from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [data, setTrendingMovies] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async (movieId) => {
      try {
        const movies = await fetchMovieReviews(movieId);
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
    <div className={styles.reviews}>
      <h2 className={styles.reviewsHeader}>Огляди</h2>
      <ul className={styles.reviewsList}>
        {data.results.length > 0 ? (
          data.results.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              <h3 className={styles.reviewAuthor}>{review.author}</h3>
              <p className={styles.reviewContent}>{review.content}</p>
            </li>
          ))
        ) : (
          <div>Sorry, we don't have any reviews...</div>
        )}
      </ul>
    </div>
  );
}

export default Reviews;
