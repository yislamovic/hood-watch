import './styles/App.css';
import './styles/Nav.css';
import Nav from './component/Nav'
import Home from './routes/Home'
import New from './routes/New'
import Login from './routes/Login'
import Register from './routes/Register'
import Posts from './routes/Posts'
import Map from './routes/Map'
//import Typical from 'react-typical'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App() {
  //** USE THIS USEEFECT AND USESTATE FOR A TEMPLATE **
  // const [info, setInfo] = useState({
  //   id: null,
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   person_password: '',
  //   person_address: ''
  // });

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const [message, delete] = await Promise.all([
  //         axios.get(`http://localhost:8000/users`).then((response) => {
  //           console.log('im response.data', response.data)
  //           return response.data
  //         })
  //       ]);
  //       setInfo(message)
  //       console.log('this is from the backend', info)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, []);

  return (
    <Router>
      <Nav className="nav" />
      {/* <Typical loop={Infinity} wrapper="b" steps={["a",1000,"b",1000,"c",1000]} /> */}
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/login" component={Login} />
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
