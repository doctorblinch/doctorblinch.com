import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/App.css';
import Main from './Main'
import Contact from "./Contact";
import NavBar from '../components/navBar'
import logo from '../components/user.png'


function App() {
  return (
    <BrowserRouter>
        <Helmet titleTemplate="%s - doctorblinch" defaultTitle="doctorblinch.com">
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href={logo} />
        </Helmet>
      <div>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
