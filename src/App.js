import { Switch, Route } from 'wouter'
import { PokemonsContextProvider } from './context/PokemonsContext'

import Header from 'Components/Header';
import Home from 'Pages/Home'
import PageNotFound from 'Pages/PageNotFound';
import SearchResults from 'Pages/SearchResults';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <section className='App-content'>
        <PokemonsContextProvider>
          <Switch>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={SearchResults}
              path='/search/:keyword'
            />
            <Route
              component={PageNotFound}
              path='/invalid-name/:rest*'
            />
          </Switch>
        </PokemonsContextProvider>
      </section>
    </div>
  );
}

export default App;
