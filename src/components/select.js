import React, { useState } from "react";
import useStyles from "./Theme";
import { Grid, Divider, Typography, ListItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { InfoUser } from "../components/InfoUser";
import Lists from "../components/Lists";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Repos = (props) => {
  const [repoFilter, setRepoFilter] = useState("");
  const [menu, setMenu] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleclose = () => {
    setMenu(null);
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

              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="outlined"
                type="button"
                className={classes.buttonRepo}
              >
                Language
              </Button>
              <Menu
                id="simple-menu"
                //menu={menu}
                keepMounted
                value={repoFilter}
                onChange={onchangeRepo}
                open={Boolean(menu)}
                onClose={handleclose}
              >
                {props.repo.map((leng) => {
                  return (
                    <div>
                      {leng.language ? (
                        <MenuItem key={leng.id} onClick={handleclose}>
                          {leng.language}
                        </MenuItem>
                      ) : null}
                    </div>
                  );
                })}
              </Menu>
            </form>
            <Lists repo={props.repo} repoFilter={repoFilter} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Repos;
