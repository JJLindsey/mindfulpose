
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// })


function App() {
  return (
    // <ApolloProvider client={client}>
      <BrowserRouter>
          <Navigation/>
            <Routes>
              <Route path='/' exact element={<Home/>} />

            </Routes>
  
      </BrowserRouter>
  // </ApolloProvider>
  );
}

export default App;
