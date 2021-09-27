import './App.css';
import Test from './component/Test'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('nil');

  useEffect(() => {
    const getData = async () => {
    try {
        const [message] = await Promise.all([
          axios.get(`http://localhost:3000/home`).then((response) => {
            console.log(response.data)
            return response.data.username
          })
        ]);
        setMsg(message)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, []);

  return (
    <div className="App">
      <Test message={msg}/>
    </div>
  );
}

export default App;
