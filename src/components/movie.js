import React from 'react'

import styles from './movie.module.css'

export function Movie({Poster, Title, Type, Year, imdbID}) {
  return (
    <div className={styles.root}>
      <img src={Poster} alt={`${Title} movie poster`} />
      {Title} ({Year})
    </div>
  )
}
