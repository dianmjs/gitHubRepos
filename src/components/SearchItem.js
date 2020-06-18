import React, { useState } from "react";
import useStyles from "./Theme";
import Octocat from "./Image/Octocat.jpg";
import { Grid, Divider, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";

const SearchItem = () => {
  const [input, setInput] = useState("");

  const onChangeHanler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSumit = (e) => {
    e.preventDefault();
  };

  const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" direction="row" alignItems="center">
        <Grid item>
          <div>
            <img variant="square" src={Octocat} className={classes.media} />
          </div>
        </Grid>
        <Grid item>
          <form onSubmit={handleSumit} noValidate autoComplete="off">
            <TextField
              required
              placeholder="Find a repository..."
              variant="outlined"
              value={input}
              type="text"
              size="small"
              className={classes.todoInput}
              onChange={onChangeHanler}
            />
          </form>
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <NavLink to="/Repos" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            <Button variant="outlined" type="submit" className={classes.button}>
              Search
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchItem;
