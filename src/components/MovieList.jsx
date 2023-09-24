import { useLocation, NavLink } from 'react-router-dom';
import React from 'react';
import styles from './MovieList.module.css'; 

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const handleMouseEnter = (event) => {
    event.target.style.color = getRandomColor();
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = '';
  };

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movieItem}>
          {}
          <NavLink
            to={`/movies/${movie.id}`}
            state={location}
            className={styles.movieLink}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <strong>{movie.title ? movie.title : movie.name}</strong>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
