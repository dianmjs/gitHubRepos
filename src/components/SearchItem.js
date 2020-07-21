import React, { useState } from "react";
import useStyles from "./Theme";
import Octocat from "./Image/Octocat.jpg";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import api from "../service/api";

const SearchItem = () => {
  const [users, setUsers] = useState("");
  const [error, setError] = useState(false);

  const onChangeHanler = (e) => {
    setUsers(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.getDates(users).then((resp) => {
      if (resp.message === "Not Found") {
        setError(true);
      } else {
        setError(false);
        history.push({
          pathname: "/Repos",
          state: { datesUser: resp },
        });
      }
    });
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
        <Grid item xs={11} sm={9} md={7}>
          <div className={classes.inputIndex}>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                placeholder="GitHub username..."
                variant="outlined"
                value={users}
                type="text"
                size="small"
                helperText={error ? "*Icorrect Username" : null}
                error={error}
                className={classes.todoInput}
                onChange={onChangeHanler}
              />

              <Button
                color="primary"
                variant="contained"
                type="submit"
                className={classes.button}
              >
                Search
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchItem;
