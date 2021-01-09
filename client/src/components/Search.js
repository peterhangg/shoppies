import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useDispatch } from 'react-redux';
import useDebounce from "../hook/useDebounce";
import { getMovies } from "../actions/getMovies";
import { getSearch } from "../actions/getSearch";

const GET_MOVIES = gql`
  query GetMovies($title: String!) {
    movies(title: $title) {
      id
      title
      year
      poster
    }
  }
`;

const Search = () => {
  const [title, setTitle] = useState("");
  const searchValue = useDebounce(title, 700);
  const dispatch = useDispatch();

  const [loadMovies, moviedata] = useLazyQuery(GET_MOVIES);

  useEffect(() => {
      if (moviedata) {
        dispatch(getMovies(moviedata));
      }
  },[dispatch, moviedata]);

  const updateSearch = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(searchValue);
    loadMovies({ variables: { title: title } });
    dispatch(getSearch(title));
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Enter Movie Title</label>
      <input value={title} onChange={updateSearch} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
