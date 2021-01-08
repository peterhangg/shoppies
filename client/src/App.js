import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import useDebounce from "./hook/useDebounce";
import "./App.css";

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

function App() {
  const [title, setTitle] = useState("");
  const searchValue = useDebounce(title, 700);

  const [loadMovies, { data, loading, error }] = useLazyQuery(GET_MOVIES, {
    fetchPolicy: "no-cache",
  });

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
    <div className="App">
      <form onSubmit={getSearch}>
        <label>Enter Movie Title</label>
        <input value={title} onChange={updateSearch} required />
        <button type="submit">Submit</button>
      </form>
      {loading && <h5>Loading...</h5>}
      {error && (
        <h5>Oops there is an error! Try entering a different movie title</h5>
      )}
      {data && (
        <ul>
          {data.movies.map((movie) => (
            <li key={movie.id}>
              <p>{movie.title}</p>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
