import React from 'react'
import { withApollo } from '@apollo/client/react/hoc';

const Nominations = ({ client }) => {
  console.log("CLIENT", client.cache.data.data);
  const apolloCacheData = client.cache.data.data;
  
  
  const cacheReducer = (data) => {
    let reducer = [];
    for (const property in data) {
      reducer.push(data[property])
    }
    return reducer.filter((ele) => ele.title);
  }

  const cacheState = cacheReducer(apolloCacheData);
  console.log("CACHE REDUCER", cacheState);

  return (
    <ul>
      {cacheState && cacheState.length > 0 && (
        cacheState.map((movie) => (
          <li>
            <p>{movie.title}</p>
          </li>
        ))
      )}
    </ul>
  )
}

export default withApollo(Nominations);
