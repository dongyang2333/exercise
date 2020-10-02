import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.js";
import ExerciseList from "./components/exerciseslist";
import EditExercise from "./components/editexercise";
import CreateExercise from "./components/createexercise";
import CreateUser from "./components/createuser";

function App() {
  return (
    <Router>
        <Navbar/>
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise}/>
        <Route path="/user" component={CreateUser}  />
            
    </Router>
  );
}

export default App;
