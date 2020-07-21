import React from "react";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Repos from "./components/Repos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchItem />
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
