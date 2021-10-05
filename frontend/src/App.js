import './styles/App.css';
import './styles/Nav.css';
import useForm from "./hooks/useForm.js";
import Nav from './component/Nav'
import Home from './routes/Home'
import New from './routes/New'
import Login from './routes/Login'
import Register from './routes/Register'
import Posts from './routes/Posts'
import Map from './routes/Map'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, createContext } from 'react';
export const authContext = createContext();

function App() {
  
  return (
    <Router>
      <Nav className="nav"/>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register} />
          <Route path="/new" component={New} />
          <Route path="/posts" component={Posts} />
          <Route path="/map" component={Map} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
