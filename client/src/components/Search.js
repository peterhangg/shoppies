import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import useDebounce from "../hook/useDebounce";

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

  const [loadMovies, { data, loading, error }] = useLazyQuery(GET_MOVIES);

  const updateSearch = (e) => {
    setTitle(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setTitle(searchValue);
    loadMovies({ variables: { title: title } });
    setTitle("");
  };

  return (
    <form onSubmit={getSearch}>
      <label>Enter Movie Title</label>
      <input value={title} onChange={updateSearch} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
