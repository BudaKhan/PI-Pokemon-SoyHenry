import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from "./components/Home/Home.jsx"
import LandingPage from "./components/LandingPage/LandingPage"
import PokeDetail from './components/PokeDetail/PokeDetail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';


function App() {
  return (
    
    <div className="App">
        <Switch>
          <Route  exact path="/" > <LandingPage/> </Route>
          <Route  exact path="/home" > <Home/> </Route> 
          <Route  exact path="/create"> <CreatePokemon/> </Route> 
          <Route  exact path="/home/:id"> <PokeDetail/> </Route> 
        </Switch>
    </div>
   
  );
}

export default App;
