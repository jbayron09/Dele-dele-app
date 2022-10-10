import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const token = 'Bearer aa3530bd8a6ac3b958eae8d19443e6697b379350bebf18b82e4d98f65f1841a9c6710cf82f8a495ccccb7b0e92153bac59ca412e7dd91e44887d6dc6f17940671a1d3c2ed132e8b482eb6b08e62474db90f99b89cc5d19f51715c1418bd5be13ea0997ed3d9c84533b903266fbc8ec4104767b7c8ffd836a3ce963ee3cb42b20'
const client = new ApolloClient({
    uri: 'https://api.deledele.app/graphql/',
    headers: {
        authorization: token
    },
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>
);

