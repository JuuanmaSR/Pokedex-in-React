import { PokemonsContextProvider } from './context/PokemonsContext'

import { Switch, Route } from 'wouter'
import Header from 'Components/Header';
import Home from 'Pages/Home'
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
          </Switch>
        </PokemonsContextProvider>
      </section>
    </div>
  );
}

export default App;
