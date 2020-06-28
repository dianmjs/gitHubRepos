import React, { useState } from "react";
import useStyles from "./Theme";
import { Grid, Divider, Typography, ListItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { InfoUser } from "../components/InfoUser";
import Lists from "../components/Lists";
import Select from "react-select";

const Repos = (props) => {
  const [repoFilter, setRepoFilter] = useState("");
  const [menu, setMenu] = useState(false);
  const classes = useStyles();

  const onclickMenu = (e) => {
    e.preventDefault();

    setMenu({ menu: true }, () => {
      document.addEventListener("click", closeMenu());
    });
  };

  const closeMenu = () => {
    setMenu({ menu: false }, () => {
      document.addEventListener("click", closeMenu);
    });
  };

  const onchangeRepo = (e) => {
    setRepoFilter(e.target.value);
  };

  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item xs={6} sm={3} md={2}>
          <InfoUser data={props.data} />
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <div className={classes.contecRepo}>
            <form noValidate autoComplete="off">
              <TextField
                required
                placeholder="Find a repository..."
                variant="outlined"
                type="text"
                size="small"
                className={classes.inputRepo}
                onChange={onchangeRepo}
              />
            </form>
            {/*<Button
                onClick={onclickMenu}
                variant="outlined"
                type="button"
                className={classes.buttonRepo}
              >
                Language
              </Button>*/}
            <div
              className="dropdown"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
            >
              <div className="button" onClick={onclickMenu}>
                <Button variant="outlined" type="button">
                  {" "}
                  Language
                </Button>
              </div>
              {menu ? (
                <ul>
                  {props.repo.map((leng) => {
                    return (
                      <li key={leng.id}>
                        <a className="active" href="#Create Page">
                          {leng.language}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
            <Lists repo={props.repo} repoFilter={repoFilter} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Repos;
