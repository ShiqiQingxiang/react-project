import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templatePopularMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from "@mui/material/IconButton";

const PopularMoviesPage = (props) => {
    
  const {  data, error, isLoading, isError }  = useQuery('popularMovies', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return <IconButton>
          <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
      }}
    />
  );
};
export default PopularMoviesPage;