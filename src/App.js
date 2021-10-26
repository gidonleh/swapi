import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Dimmer, Loader } from 'semantic-ui-react';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect( () => {
        async function fetchMovies() {
            let res = await fetch('https://swapi.dev/api/films/?format=json');
            let data = await res.json();
            setMovies(data.results);
        }

        fetchMovies();
        setLoading(false);
        if (movies == undefined) {
          fetchMovies();
          setLoading(false);
        }
        
    }, [])


  return (
    <>
    
      <Router>
        {loading ? (
                  <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                  </Dimmer>
                ) : (
                  <Switch>
                  <Sidebar data={movies}/>

                    <Route exact path='/'>
                      <Main />
                    </Route>

                 </Switch>
        )}
        
      </Router>
    </>
  );
}

export default App;
