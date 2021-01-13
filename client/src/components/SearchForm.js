import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { gql, useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import useDebounce from "../hook/useDebounce";
import { getMovies } from "../actions/movieActions";
import { getSearch } from "../actions/searchActions";
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

const SearchForm = ({ setShowMovieContainer, showMovieContainer }) => {
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
    setShowMovieContainer(true);
    setTitle("");
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <input
          value={title}
          placeholder="Search Movie Title..."
          onChange={updateSearch}
          maxLength="75"
          required
        />
        <button type="submit">
          <i className="fas fa-search fa-lg"/> 
        </button>
      </Form>
      {!showMovieContainer && <h3>Vote for your favourite movies!</h3>}
    </>
  );
};

SearchForm.propTypes = {
  setShowMovieContainer: PropTypes.func,
  showMovieContainer: PropTypes.bool,
};

export default SearchForm;
