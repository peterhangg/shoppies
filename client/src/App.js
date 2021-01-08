import React, { useState, useEffect, useMemo } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import useDebounce from "./hook/useDebounce";

import Nominations from "./components/Nominations";
import Search from "./components/Search";
import "./App.css";

// const GET_MOVIES = gql`
//   query GetMovies($title: String!) {
//     movies(title: $title) {
//       id
//       title
//       year
//       poster
//     }
//   }
// `;

const App = () => {
  // const [title, setTitle] = useState("");
  // const searchValue = useDebounce(title, 500);
  
  // const [loadMovies, { data, loading, error }] = useLazyQuery(GET_MOVIES, {
  //   fetchPolicy: 'network-only'
  // });
  

  // const updateSearch = (e) => {
  //   setTitle(e.target.value);
  // };

  // const getSearch = (e) => {
  //   e.preventDefault();
  //   setTitle(searchValue);
  //   loadMovies({ variables: { title: title } });
  //   setTitle("");
  // };

  return (
    <div className="App">
      <Search />
      {/* <form onSubmit={getSearch}>
        <label>Enter Movie Title</label>
        <input value={title} onChange={updateSearch} />
        <button type="submit">Submit</button>
      </form> */}
      <Nominations />
    </div>
  );
}

export default App;
