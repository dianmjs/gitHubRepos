import React, { useState } from "react";
import useStyles from "./Theme";
import Octocat from "./Image/Octocat.jpg";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Grid, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const SearchItem = (props) => {
  const [users, setUsers] = useState("");
  const [error, setError] = useState(null);

  const disable = () => {
    if (props.data.login === null) {
      return setError({
        error: "Icorrect Username",
      });
    } else {
      return setError({
        error: null,
      });
    }
  };

  const onChangeHanler = (e) => {
    setUsers(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    disable();
    //api de usuarios
    props.getDates(users);
    //api de repositorios
    props.getRepo(users);
    //renderiza a la otra página
    history.push("/Repos");
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
                value={props.users}
                type="text"
                size="small"
                helperText={error}
                className={classes.todoInput}
                onChange={onChangeHanler}
              />
              {/*<FormHelperText id="component-helper-text" error>
                Some important helper text
                </FormHelperText>*/}

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
