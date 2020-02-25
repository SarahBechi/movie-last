import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieAdd from './MovieAdd';
import EditMovie from './editForm';
import MovieDescription from './description';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {




  render() {

    return (



      <Router>
        <div className="container-Movie">

          <MovieList />
          <MovieAdd />

          <Route path="/edit/:idf" component={EditMovie} />
          <Route path="/description/:description" component={MovieDescription} />

        </div>
      </Router>

    );
  }
}



export default App;