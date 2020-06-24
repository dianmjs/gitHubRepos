import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Repos from "./components/Repos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const getDates = async (user) => {
    const data = await fetch(`https://api.github.com/users/${user}/repos`);
    const username = await data.json();
    console.log(username);
    setData(username);
  };

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchItem getDates={getDates} />
          </Route>
          <Route path="/Repos">
            <Repos data={data} component={Repos} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
