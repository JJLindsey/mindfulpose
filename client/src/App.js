
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

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
          <Footer/>
      </BrowserRouter>
  // </ApolloProvider>
  );
}

export default App;
