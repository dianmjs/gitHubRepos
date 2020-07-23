import React, { useState } from "react";
import useStyles from "./Theme";
import Octocat from "./Image/Octocat.jpg";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerUsuarioAccion } from "../redux/usuarioGit";

const SearchItem = () => {
  const [users, setUsers] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const GiUserExito = useSelector((store) => store.userGit.data);
  console.log("informacion usuario", GiUserExito);

  /*React.useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerUsuarioAccion());
    };

    fetchData();
  }, [dispatch]);*/

  const onChangeHanler = (e) => {
    setUsers(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (GiUserExito.alias === "undefined") {
      console.log("error", GiUserExito.alias);
      setError(true);
    } else {
      console.log("usuario bueno", GiUserExito.alias);
      setError(false);
      history.push("/Repos");
    }
    setUsers("");
  };

  React.useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerUsuarioAccion());
    };
    fetchData();
  }, [dispatch]);

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
                onClick={() => dispatch(obtenerUsuarioAccion(users))}
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
