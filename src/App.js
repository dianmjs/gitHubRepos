import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Repos from "./components/Repos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("useEffect");
    obtenerDatos();
  }, []);

  /*function obtenerDatos(input) {
    return fetch("https://api.github.com/users").then((response) =>
      response.json()
    );
  }*/
  const obtenerDatos = async (input) => {
    const data = await fetch(`https://api.github.com/users/${input}/repos`);
    const users = await data.json();
    console.log(users);
  };

  const onChangeHanler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchItem
              input={input}
              onChangeHanler={onChangeHanler}
              handleSumit={handleSumit}
            />
          </Route>
          <Route path="/Repos">
            <Repos />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
