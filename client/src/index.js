import React from 'react';
import ReactDOM from 'react-dom';
import { client } from "./client";
import { ApolloProvider } from "@apollo/client";
import {Provider} from 'react-redux'
import store from "./store";

import App from './App';
import GlobalStyle from "./styles/globalStyles";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
