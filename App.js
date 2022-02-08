import {ApolloProvider} from '@apollo/client';
import React from 'react';
import client from './src/graphql';
import {Home} from './src/pages';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
