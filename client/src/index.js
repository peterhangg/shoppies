import React from 'react';
import ReactDOM from 'react-dom';
import { client } from "./client";
import { ApolloProvider } from "@apollo/client";
import {Provider} from 'react-redux'
import store from "./store";
import './index.css';
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
