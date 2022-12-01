import React from 'react'
import NavB from '../MovieList/NavB'
import MovieList from '../MovieList/MovieList'

function MovieL({data}) {
  return (
    <div>
      <NavB />
      <MovieList data={data} />
    </div>
  )
}

export default MovieL