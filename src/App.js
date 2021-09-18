import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>

        <Route path="/" component={Home}/>
        <Route path="/About" component={About}/>
        
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;
