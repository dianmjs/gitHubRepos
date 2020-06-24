import React, { useState } from "react";
import useStyles from "./Theme";
import Octocat from "./Image/Octocat.jpg";
import { Grid, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";

const SearchItem = (props) => {
  const [users, setUsers] = useState("");

  const onChangeHanler = (e) => {
    setUsers(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getDates(users);
    setUsers("");
  };

  const classes = useStyles();
  return (
    <div className={classes.SearchRepo}>
      <Grid container justify="center" direction="row" alignItems="center">
        <Grid item xs={12} sm={3} md={2}>
          <div>
            <img variant="square" src={Octocat} className={classes.media} />
          </div>
        </Grid>
        <Grid item xs={8} sm={7} md={7}>
          <TextField
            required
            placeholder="GitHub username..."
            variant="outlined"
            value={props.users}
            type="text"
            size="small"
            className={classes.todoInput}
            onChange={onChangeHanler}
          />
        </Grid>

        <Grid item xs={4} sm={2} md={2}>
          <NavLink to="/Repos" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            <Button
              variant="outlined"
              type="submit"
              className={classes.button}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchItem;
