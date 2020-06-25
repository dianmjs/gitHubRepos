import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Repos from "./components/Repos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [repo, setRepo] = useState([]);

  const getDates = async (user) => {
    const data = await fetch(`https://api.github.com/users/${user}`);
    const username = await data.json();
    console.log(username);
    setData(username);
  };

  const getRepo = async (user) => {
    const data = await fetch(`https://api.github.com/users/${user}/repos`);
    const repos = await data.json();
    console.log(repos);
    setRepo(repos);
  };

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchItem data={data} getDates={getDates} getRepo={getRepo} />
          </Route>
          <Route path="/Repos">
            <Repos data={data} repo={repo} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
