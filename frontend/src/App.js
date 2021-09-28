import './styles/App.css';
import './styles/Nav.css';
import Nav from './component/Nav'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './routes/Home'
import About from './routes/About'
import Login from './routes/Login'
import Register from './routes/Register'
import Posts from './routes/Posts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  //** USE THIS USEEFECT AND USESTATE FOR A TEMPLATE **
  // const [msg, setMsg] = useState('nil');

  // useEffect(() => {
  //   const getData = async () => {
  //   try {
  //       const [message] = await Promise.all([
  //         axios.get(`http://localhost:3000/home`).then((response) => {
  //           console.log(response.data)
  //           return response.data.username
  //         })
  //       ]);
  //       setMsg(message)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, []);

  return (
    <Router>
      <Nav className="nav"/>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/posts" component={Posts}/>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
