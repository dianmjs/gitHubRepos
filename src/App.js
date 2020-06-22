import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import Repos from "./components/Repos";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  //const [data, setData] = useState([]);
  const [user, setUser] = useState("");

  const onChangeHanler = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${user}/repos`).then((resp) => {
      props.onSubmit(resp.data);
      setUser("");
    });

    // e.target.reset();
  };

  /*
  function obtenerDatos(user) {
    return fetch(`https://api.github.com/users/${user}`).then((response) =>
      response
        .json()
        .then((json) => console.log(json))
        .then((data) => {
          setUser({
            user: {
              avatar_url: data.avatar_url,
              name: data.name,
              alias: data.login,
              profile: data.bio,
              company: data.company,
              location: data.location,
              blog: data.blog,
              repos: data.repos_url,
            },
          });
        })
    );
  }

  */

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <SearchItem
              user={user}
              onChangeHanler={onChangeHanler}
              handleSumit={handleSumit}
            />
          </Route>
          <Route path="/Repos">
            <Repos
              user={user}
              avatar={user.avatar_url}
              name={user.name}
              alias={user.login}
              profile={user.bio}
              company={user.company}
              location={user.location}
              blog={user.blog}
              repos={user.repos_url}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
