import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import Header from "./Header";
import Home from "./Home";
import Mint from "./Mint";
import FAQ from "./FAQ";
import Guide from "./Guide";

function App() {
  return (
    <Router>
      <div className="select-none font-Bai">
      <Particles options={particlesOptions}/>
      <Header/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mint" component={Mint} />
          <Route exact path="/faq" component={FAQ} />  
          <Route exact path="/guide" component={Guide} />  
      </Switch>
      </div>
    </Router>
  );
};

export default App;
