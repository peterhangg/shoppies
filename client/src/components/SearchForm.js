import React, { useState, useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import useDebounce from "../hook/useDebounce";
import { getMovies } from "../actions/getMovies";
import { getSearch } from "../actions/getSearch";
import { Form } from "../styles/index";

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

const SearchForm = () => {
  const [title, setTitle] = useState("");
  const searchValue = useDebounce(title, 700);
  const dispatch = useDispatch();

  const [loadMovies, moviedata] = useLazyQuery(GET_MOVIES);

  useEffect(() => {
    if (moviedata) {
      dispatch(getMovies(moviedata));
    }
  }, [dispatch, moviedata]);

  const updateSearch = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(searchValue);
    loadMovies({ variables: { title: title } });
    dispatch(getSearch(title.toUpperCase()));
    setTitle("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <input
        value={title}
        placeholder="Search Movie Title..."
        onChange={updateSearch}
        required
      />
      <button type="submit">
        <i className="fas fa-search fa-lg"/> 
      </button>
    </Form>
  );
};

export default SearchForm;
