import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
          <Nav />
          <Switch>
          
          </Switch>
          <Footer/>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
