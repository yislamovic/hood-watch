import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Logout(props) {
  let history = useHistory();
  const [email] = useState("");
  const [user] = useState();
  const [password] = useState("");

  const handleLogout = () => {
    user({});
    email("");
    password("");
    localStorage.clear();
  };

  function userLogout() {
    const getData = async () => {
      try {
        const [logoutSubmit] = await Promise.all([
          axios.post(`http://localhost:3000/login`, user, email, password)
        ]).then(() => {
          history.push('/')
        })
        return logoutSubmit;
      } catch (err) {
        console.log(err);
      }
    }
    getData()
  }
  return (
    handleLogout(),
    userLogout()
  );
}