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
  //       console.log(err)w
  //     }
  //   }
  //   getData()
  // }, []);
  // const { handleChange, handleSubmit, values, setValues } = useForm(handleUser);
  // const [user, setUser] = useState(null)

  // function handleUser(){
  //   setUser({first_name: values.first_name, last_name: values.last_name, address: values.address, email: values.email, password: values.password, password_confirm: values.password_confirm})
  // }

  const [user, setUser] = useState(null);

  return (
    <Router>
      <Nav className="nav" user={user} setUser={setUser}/>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={() => <Login user={user} setUser={setUser}/>}/>
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
